import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { wrap } from 'popmotion'
import { ImageDetails } from './ProjectTypes'
import styled from 'styled-components'
import { breakpoints } from '../../shared/styles'
import SlideshowImage from './SlideshowImage'
import useIsMobile from '../../../hooks/use-is-mobile'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    height: 240px;
  }
`

const NavButton = styled.div`
  top: calc(50% - 20px);
  position: absolute;
  background: white;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
  color: black;
  opacity: 0.5;
  transition: 0.2s all;

  &:hover {
    opacity: 1;
  }
`

const ImageContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
`

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

type SlideshowProps = {
  images: Array<ImageDetails>
}

const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
  const isMobile = useIsMobile()
  const [[page, direction], setPage] = useState([0, 0])

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }
  return (
    <Wrapper>
      <AnimatePresence initial={false} custom={direction}>
        <ImageContainer
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag={images.length <= 1 ? false : 'x'}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        >
          <SlideshowImage
            src={images[imageIndex].src}
            alt={images[imageIndex].title}
            priority={images[imageIndex].priority ?? false}
          />
        </ImageContainer>
      </AnimatePresence>
      {images.length > 1 && !isMobile && (
        <>
          <NavButton style={{ right: '10px' }} onClick={() => paginate(1)}>
            {'‣'}
          </NavButton>
          <NavButton
            style={{ left: '10px', transform: 'scale(-1)' }}
            onClick={() => paginate(-1)}
          >
            {'‣'}
          </NavButton>
        </>
      )}
    </Wrapper>
  )
}

export default Slideshow
