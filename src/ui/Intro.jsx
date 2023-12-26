const StyledTextImg = styled.div`
  position: relative;
  width: 65rem;
  top: 15rem;
  left: 55rem;

  font-size: 5rem;
  color: var(--color-brand-50);
  font-weight: bold;
`;

function Intro() {
  return (
    <div>
      <StyledTextImg> Browse Our Collection</StyledTextImg>
    </div>
  );
}

export default Intro;
