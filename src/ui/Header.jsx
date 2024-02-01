import { useState } from "react";
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
    color: #dc2626;
  }
`;

const Hover = styled.div`
  color: #000;
  cursor: pointer;

  &:hover {
    color: #dc2626;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 80%;
  left: 30;
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  padding: 10px;
  z-index: 1;
  border-radius: 5px;
`;

const BlogDropdownItem = styled(Li)`
  font-weight: normal;
  color: #000;

  &:hover {
    color: #dc2626;
  }
`;

function Header() {
  const [isBlogHovered, setBlogHovered] = useState(false);

  return (
    <Container className="bg-gray-00 h-44 text-3xl flex items-center justify-around px-4 space relative">
      <Logo>Ethio-Bazaar</Logo>
      <Navigate className="flex list-none gap-14 ">
        <Li>HOME</Li>
        <Li>SHOP</Li>
        <Li>COLLECTION</Li>
        <Li>
          <Hover onMouseEnter={() => setBlogHovered(true)}>BLOG</Hover>
          <DropdownMenu
            isVisible={isBlogHovered}
            onMouseLeave={() => setBlogHovered(false)}
          >
            <BlogDropdownItem>Category 1</BlogDropdownItem>
            <BlogDropdownItem>Category 2</BlogDropdownItem>
            <BlogDropdownItem>Category 3</BlogDropdownItem>
          </DropdownMenu>
        </Li>
        <Li>CONTACT</Li>
      </Navigate>
      <Function className="text-6xl flex gap-5 ">
        <Hover>
          <CiSearch />
        </Hover>
        <Hover>
          <IoPersonOutline />
        </Hover>
        <Hover>
          <FiShoppingCart />
        </Hover>
      </Function>
    </Container>
  );
}

export default Header;
