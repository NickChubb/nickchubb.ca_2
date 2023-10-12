import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { ImageDetails } from './ProjectTypes'
import styled from 'styled-components'
import { breakpoints } from '../../shared/styles'

const GalleryWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    max-height: 300px;
  }
`

const CarouselWrapper = styled(Carousel)`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 0 0 4px 0;
  overflow: hidden;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    max-height: 300px;
    border-radius: 0;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    height: 250px;
  }
`

const Gallery: React.FC<{ images: Array<ImageDetails> }> = ({ images }) => {
  return (
    <GalleryWrapper>
      <CarouselWrapper showThumbs={false} selectedItem={0}>
        {images.map((imageData, key) => (
          <ImageContainer
            key={key}
            style={{
              backgroundImage: `url("${imageData.path}")`,
            }}
          >
          </ImageContainer>
        ))}
      </CarouselWrapper>
    </GalleryWrapper>
  )
}

export default Gallery
