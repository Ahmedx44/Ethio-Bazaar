import styled from "styled-components";
import { HiMagnifyingGlass, HiOutlineShoppingCart } from "react-icons/hi2";
import Button from "./Button";

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 30px;
  background-color: var(--color-brand-50);
  position: sticky;
  background-color
`;
const Row = styled.div`
  display: flex;
  gap: 6rem;
  font-size: 19px;
  padding-top: 10px;
`;

const Icons = styled.div`
  font-size: 30px;
  display: flex;
  gap: 20px;
`;
const Text = styled.p`
  font-weight: bold;
  font-size: 19px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: var(--color-brand-500);
  }
`;
const StyledImg = styled.div`
  background-image: url("src/data/pexels-francesco-ungaro-281260.jpg");
  /* Additional styling options (optional) */
  width: 100%;
  height: 550px;
  background-size: cover;
  background-position: center;
`;
const StyledTextImg = styled.div`
  position: relative;
  width: 65rem;
  top: 15rem;
  left: 55rem;

  font-size: 5rem;
  color: var(--color-brand-50);
  font-weight: bold;
`;

function Header() {
  return (
    <>
      <HeaderRow>
        <div>Ethio-Bazaar</div>
        <Row>
          <Text>Home</Text>
          <Text>Shop</Text>
          <Text>Contact</Text>
        </Row>
        <Row>
          <Icons>
            <HiMagnifyingGlass />
            <HiOutlineShoppingCart />
          </Icons>
          <Button>Buy Now</Button>
        </Row>
      </HeaderRow>
      <StyledImg>
        <StyledTextImg> Browse Our Collection</StyledTextImg>
      </StyledImg>
    </>
  );
}

export default Header;
