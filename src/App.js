import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

import { Navigation } from "./Navigation/component";
import logo from "./images/Logo.png";

const Wrapper = styled.div`
  font-family: Open Sans, sans-serif;
  color: #3a3a3a;
`;

const RightWrapper = styled.div`
  padding: 70px 60px;
`;

const ProblemTitle = styled.h1`
  color: #1f4177;
`;

const LeftWrapper = styled.div`
  text-align: center;
  margin: auto;
  display: block;
  padding: 7em 5em 5em 5em;
`;

class App extends Component {
  render() {
    return (
      <Wrapper className="App">
        <Navigation />
        <div className="container">
          <Row>
            <Col lg={5}>
              <LeftWrapper>
                <img src={logo} height="200" width="200" />
              </LeftWrapper>
            </Col>
            <Col lg={7}>
              <RightWrapper>
                <ProblemTitle>The Nine-Dot Problem</ProblemTitle>
                <p>
                  This is a paragraph describing the nine-dot problem. This is a
                  paragraph describing the nine-dot problem. This is a paragraph
                  describing the nine-dot problem. This is a paragraph
                  describing the nine-dot problem. This is a paragraph
                  describing the nine-dot problem. This is a paragraph
                  describing the nine-dot problem.
                </p>
                <p>See solution</p>
                <p>
                  This is the solution to the nine-dot problem. This is the
                  solution to the nine-dot problem. This is the solution to the
                  nine-dot problem.
                </p>
              </RightWrapper>
            </Col>
          </Row>
        </div>
      </Wrapper>
    );
  }
}

export default App;
