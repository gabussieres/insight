import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

import Navigation from "../Navigation/container";

const ProblemTitle = styled.h1`
  color: #1f4177;
  padding: 50px 60px;
`;

const DefinedTerm = styled.p`
  color: #1f4177;
`;

const Wrapper = styled.div`
  font-family: Open Sans, sans-serif;
  color: #3a3a3a;
`;

const RightWrapper = styled.div``;

const LeftWrapper = styled.div`
  text-align: right;
`;

const SelectedProblem = () => (
  <Wrapper className="App">
    <Navigation />
    <div className="container">
      <ProblemTitle>Definitions</ProblemTitle>
      <Row>
        <Col lg={3}>
          <LeftWrapper>
            <DefinedTerm>Insight</DefinedTerm>
          </LeftWrapper>
        </Col>
        <Col lg={7}>
          <RightWrapper>
            <p>
              Definition of insight. Definition of insight. Definition of
              insight.
            </p>
          </RightWrapper>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>
          <LeftWrapper>
            <DefinedTerm>Insight</DefinedTerm>
          </LeftWrapper>
        </Col>
        <Col lg={7}>
          <RightWrapper>
            <p>
              Definition of insight. Definition of insight. Definition of
              insight.
            </p>
          </RightWrapper>
        </Col>
      </Row>
    </div>
  </Wrapper>
);

export default SelectedProblem;
