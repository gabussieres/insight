import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

import Navigation from "../Navigation/container";
import Problem from "../Problem/container";
import logo from "../images/Logo.png";

const Wrapper = styled.div`
  font-family: Open Sans, sans-serif;
  color: #3a3a3a;
`;

const RightWrapper = styled.div`
  padding: 70px 60px;
`;

const LeftWrapper = styled.div`
  text-align: center;
  margin: auto;
  display: block;
  padding: 7em 5em 5em 5em;
`;

const SelectedProblem = () => (
  <Wrapper className="App">
    <Navigation />
    <div className="container">
      <Row>
        <Col lg={5}>
          <LeftWrapper>
            <img
              src={logo}
              alt="The Nine-Dot Problem logo"
              height="200"
              width="200"
            />
          </LeftWrapper>
        </Col>
        <Col lg={7}>
          <RightWrapper>
            <Problem />
          </RightWrapper>
        </Col>
      </Row>
    </div>
  </Wrapper>
);

export default SelectedProblem;
