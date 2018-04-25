import React from "react";
import styled, { css } from "styled-components";
import git_icon from "../images/GitHub-Mark-64px.png";
import logo_img from "../images/Logo.png";

const Nav = styled.div`
  border-bottom: 2px solid #fcfcfc;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 1em;
  overflow: hidden;
`;

const NavButton = styled.a`
  text-decoration: none !important
  color: #1f4177
  padding: 1.9em 1em;
  float: right;

  ${props =>
    props.title &&
    css`
      padding: 20px 2em;
      font-size: 25px;
      float: left;
    `}

  ${props =>
    props.image &&
    css`
      padding: 1.5em 1.5em 1.1em;
    `}
`;
const LogoWrapper = styled.div`
  padding: 5em 0.6em 2em 1.1em;
  display: inline;
`;

export const Navigation = () => (
  <Nav>
    <NavList>
      <NavButton title href="/">
        <LogoWrapper>
          <img src={logo_img} alt="Logo" height="20" width="20" />
        </LogoWrapper>
        insight
      </NavButton>
      <NavButton
        image
        href="https://github.com/gabussieres/insight"
        target="_blank"
      >
        <img src={git_icon} alt="GitHub" height="30" width="30" />
      </NavButton>
      <NavButton href="">About</NavButton>
      <NavButton href="">References</NavButton>
      <NavButton href="">Definitions</NavButton>
      <NavButton href="">Select</NavButton>
    </NavList>
  </Nav>
);
