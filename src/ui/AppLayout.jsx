import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const StyledAppLayout = styled.div`
  padding-top: 100px;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Outlet />
    </StyledAppLayout>
  );
}

export default AppLayout;
