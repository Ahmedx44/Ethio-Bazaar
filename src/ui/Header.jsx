import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

const Container = styled.header``;
const Logo = styled.div``;
const Navigate = styled.nav``;
const Function = styled.div``;
const Li = styled.li`
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: #dc2626; /* Replace with your desired background color */
  }
`;
function Header() {
  return (
    <Container className="bg-gray-50 h-44 text-3xl flex items-center justify-around px-4 space ">
      <Logo>Ethio-Bazaar</Logo>
      <Navigate className=" flex list-none gap-14 ">
        <Li>HOME</Li>
        <Li>SHOP</Li>
        <Li>COLLECTION</Li>
        <Li>BLOG</Li>
        <Li>CONTACT</Li>
      </Navigate>
      <Function className="text-6xl flex gap-5 ">
        <CiSearch />
        <IoPersonOutline />
        <FiShoppingCart />
      </Function>
    </Container>
  );
}

export default Header;
