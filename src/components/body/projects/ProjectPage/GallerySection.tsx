import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Image from "next/image"
import { ImageDetails } from "../ProjectTypes"
import styled from "styled-components"

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  object-fit: contain;
`

const Gallery: React.FC<{ images: Array<ImageDetails> }> = ({ images }) => {
  return (
    <Carousel> 
      {images.map((imageData, key) => (
        <ImageWrapper>
          <Image src={imageData.path} alt={imageData.description} fill />
        </ImageWrapper>
      ))}
    </Carousel>
  )
}

export default Gallery