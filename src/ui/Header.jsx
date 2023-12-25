import styled from "styled-components";
import { HiMagnifyingGlass, HiOutlineShoppingCart } from "react-icons/hi2";
import Button from "./Button";

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 30px;
  background-color: var(--color-grey-100);
  position: sticky;
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
    </>
  );
}

export default Header;
