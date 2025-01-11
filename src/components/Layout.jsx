import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Header from "./Header";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: 100%;
  }
`;

const MainContent = styled.main`
  display: flex;
  height: 100%;
  width: 100vw;
  overflow-x: hidden;
  position: relative;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    left: 0;
    width: 100%;
    overflow-y: scroll;
  }
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Sidebar />
      <MainContent>
        {/* The Outlet renders child routes here */}
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout;
