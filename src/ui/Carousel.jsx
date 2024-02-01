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
  width: auto;
  height: 80vh; /* Set the height to 50% of the viewport height */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Maintain aspect ratio and cover the container */
  }
`;

const ButtonBackk = styled.div`
  background-color: rgba(128, 128, 128, 1); /* Grey color with 50% opacity */
  /* Add other styling properties as needed */
`;
const ButtoNextt = styled.div`
  background-color: rgba(128, 128, 128, 1); /* Grey color with 50% opacity */
  /* Add other styling properties as needed */
`;
class Carousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <CarouselContainer>
          <Slider>
            <Slide index={0}>
              <IMG>
                <img
                  src="../src/data/pexels-mikey-white-20003297 (1).jpg"
                  alt=""
                />
              </IMG>
            </Slide>
            <Slide index={1}>
              <IMG>
                <img
                  src="../src/data/pexels-francesco-ungaro-281260.jpg"
                  alt=""
                />
              </IMG>
            </Slide>
            <Slide index={2}>I am the third Slide.</Slide>
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
