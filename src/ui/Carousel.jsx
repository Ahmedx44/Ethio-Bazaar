import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styled from "styled-components";

const CarouselContainer = styled.div`
  position: relative;
  max-height: 400px;
  overflow: hidden;

  @media (max-width: 615px) {
    max-height: 300px; /* Decrease the max-height for screens 615 pixels or less */
  }
`;

const NavigationButtons = styled.div`
  position: absolute;
  top: 10%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  transform: translateY(-10%);
  z-index: 1;
  color: white;
  font-weight: bold;
  font-size: 30px;
`;

const IMG = styled.div`
  width: 100%;
  max-height: 80vh;
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
    object-position: bottom;
  }
`;

const ButtonBackk = styled.div`
  background-color: rgba(107, 114, 128, 0.7);
  padding: 20px;
`;

const ButtoNextt = styled.div`
  background-color: rgba(107, 114, 128, 0.7);
  padding: 20px;
`;

class Carousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={2}
      >
        <CarouselContainer>
          <Slider>
            <Slide index={0}>
              <IMG>
                <img
                  src="../src/data/pexels-karolina-grabowska-4938510.jpg"
                  alt=""
                />
              </IMG>
            </Slide>
            <Slide index={1}>
              <IMG>
                <img
                  src="../src/data/pexels-gabriel-freytez-341523.jpg"
                  alt=""
                />
              </IMG>
            </Slide>
          </Slider>
          <NavigationButtons>
            <ButtonBackk>
              <ButtonBack>{"<"}</ButtonBack>
            </ButtonBackk>
            <ButtoNextt>
              <ButtonNext>{">"}</ButtonNext>
            </ButtoNextt>
          </NavigationButtons>
        </CarouselContainer>
      </CarouselProvider>
    );
  }
}

export default Carousel;
