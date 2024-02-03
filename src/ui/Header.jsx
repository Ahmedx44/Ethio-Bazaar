import { useState } from "react";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 20px; /* Increased padding for better height */
  height: 80px; /* Increased height */
`;

const Logo = styled.div``;

const Navigate = styled.nav``;

const Function = styled.div``;

const Li = styled.li`
  cursor: pointer;
  font-weight: bold;
  font-size: 18px; /* Increased text size */

  &:hover {
    color: #dc2626;
  }
`;

const Hover = styled.div`
  cursor: pointer;

  &:hover {
    color: #dc2626;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  z-index: 1;
  border-radius: 5px;
  background-color: #fff;
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
    <Container className="text-2xl lg:text-base xl:text-xl 2xl:text-2xl flex items-center justify-around text-slate-50 px-4 space relative md:font-mono shadow-md bg-gray-800">
      <Logo className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        Ethio-Bazaar
      </Logo>
      <Navigate className="hidden md:flex list-none gap-6 lg:gap-8">
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
      <Function className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl flex gap-5">
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
