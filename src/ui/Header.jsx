import styled from "styled-components";
import { HiMagnifyingGlass, HiOutlineShoppingCart } from "react-icons/hi2";

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 30px;
  background-color: var(--color-grey-50);
  position: sticky;
`;
const Row = styled.div`
  display: flex;
  gap: 6rem;
  font-size: 20px;
`;
const Button = styled.div`
  padding: 10px;
  background-color:var(--color-grey-200)
  color: white;
  border-radius: var(--border-radius-lg);
  cursor: pointer;
  &:hover {
    background-color: var(--color-brand-500);
    border-color: var(--color-brand-700); /* Change border color on hover */
    color: var(--color-blue-600); /* Change text color on hover */
  }
`;
const Icons = styled.div`
  font-size: 30px;
  display: flex;
  gap: 20px;
  padding-top: 5px;
`;

function Header() {
  return (
    <>
      <HeaderRow>
        <div>Ethio-Bazaar</div>
        <Row>
          <p>Home</p>
          <p>Shop</p>
          <p>Contact</p>
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
