import styled from "styled-components";

const StyledTextImg = styled.div`
  width: 65rem;
  top: 0rem;
  font-size: 5rem;
  color: var(--color-brand-100);
  font-weight: bold;
  position: relative; /* Add relative positioning to the container */
`;

const StyledText = styled.h1`
  position: relative; /* Change to absolute positioning */
  bottom: 30rem;
  left: 60rem;

  /* Use media queries for responsive design */
  @media (max-width: 768px) {
    bottom: 2rem; /* Adjust for smaller screens */
    left: 2rem; /* Adjust for smaller screens */
  }
`;

function Intro() {
  return (
    <div>
      <StyledTextImg>
        <StyledText>Browse Our Collection</StyledText>
      </StyledTextImg>
    </div>
  );
}

export default Intro;
