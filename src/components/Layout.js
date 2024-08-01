import React from "react";
import Header from "./Header";
import { Container, styled } from "@mui/material";
import Sidebar from "./Sidebar";
import useDeviceType from "../hooks/useDeviceType";

const Flex = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
}));

const Layout = (props) => {
  const { isLoggedIn } = props;
  const deviceType = useDeviceType();
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {isLoggedIn && <Header />}
      <Flex style={{ flex: 1 }}>
        {isLoggedIn && (
          <Flex style={{ flex: "0.2" }}>
            <Sidebar hideTitles={deviceType !== "desktop"} />
          </Flex>
        )}
        <Flex style={{ flex: 1 }}>
          <Container
            style={{ paddingTop: 30, background: "#f6f6fa", minWidth: "100%" }}
          >
            {props.children}
          </Container>
        </Flex>
      </Flex>
    </div>
  );
};

export default Layout;
