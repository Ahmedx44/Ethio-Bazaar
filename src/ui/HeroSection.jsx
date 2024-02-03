import styled from "styled-components";
import Button from "../ui/Button";

const StyledButton = styled.div`
  margin-top: 2rem;
`;

function HeroSection() {
  return (
    <div className="my-8 text-center p-8 md:p-16 lg:p-24">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl w-11/12 m-auto mt-8 font-semibold text-wrap text-center">
        Discover Endless Possibilities at
        <span className="text-red-600"> Ethio-Bazaar</span>
      </h1>

      <p className="w-11/12 m-auto mt-8 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl italic">
        At Ethio-Bazaar, we bring you a curated selection of quality products to
        enhance every aspect of your life. From stylish apparel to cutting-edge
        gadgets and home essentials, find everything you need in one place.
        Elevate your lifestyle with us
      </p>

      <StyledButton className="mt-8 sm:mt-12 md:mt-16">
        <Button name="Explore Now" />
      </StyledButton>
    </div>
  );
}

export default HeroSection;
