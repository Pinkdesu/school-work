import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 50px;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0px 40px;
  background-color: rgba(0, 0, 0, 1);
`;

const LinkWrapper = styled(NavLink)`
  height: 100%;
  padding: 10px;
  color: #fff;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <LinkWrapper to="/lab1">Лаба 1</LinkWrapper>
      <LinkWrapper to="/lab2">Лаба 2</LinkWrapper>
    </HeaderWrapper>
  );
};

export default Header;
