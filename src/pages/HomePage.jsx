import styled from "styled-components";
import Intro from "../ui/intro";

const StyledImg = styled.div`
  background-image: url("src/data/pexels-francesco-ungaro-281260.jpg");
  /* Additional styling options (optional) */
  width: 100%;
  height: 550px;
  background-size: cover;
  background-position: center;
`;

function HomePage() {
  return (
    <>
      <StyledImg></StyledImg>
      <Intro />
    </>
  );
}

export default HomePage;
