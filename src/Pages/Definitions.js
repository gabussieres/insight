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
  text-align: left;
  font-weight: bold;
  padding-left: 62px;
`;

const definitions = [
  {
    term: "Combinatorial Explosion",
    definition:
      "Definition of insight. Definition of insight. Definition of insight."
  },
  {
    term: "Insight",
    definition:
      "Definition of insight. Definition of insight. Definition of insight."
  },
  {
    term: "Insight Problem",
    definition:
      "Definition of insight. Definition of insight. Definition of insight."
  },
  {
    term: "Non-Insight Problem",
    definition:
      "Definition of insight. Definition of insight. Definition of insight."
  },
  {
    term: "Problem Reformulation",
    definition:
      "Definition of insight. Definition of insight. Definition of insight."
  },
  {
    term: "Search-Inference Framework",
    definition:
      "Definition of insight. Definition of insight. Definition of insight."
  },
  {
    term: "Gestalt Framework",
    definition:
      "Definition of insight. Definition of insight. Definition of insight."
  },
  {
    term: "General Problem Solver",
    definition:
      "Definition of insight. Definition of insight. Definition of insight."
  },
  {
    term: "Search Space",
    definition:
      "Definition of insight. Definition of insight. Definition of insight."
  }
];

const definitionRow = (term, definition) => (
  <Row>
    <Col lg={3}>
      <LeftWrapper>
        <DefinedTerm>{term}</DefinedTerm>
      </LeftWrapper>
    </Col>
    <Col lg={7}>
      <RightWrapper>
        <p>{definition}</p>
      </RightWrapper>
    </Col>
  </Row>
);

const SelectedProblem = () => (
  <Wrapper className="App">
    <Navigation />
    <div className="container">
      <ProblemTitle>Definitions</ProblemTitle>
      {definitions.map(definitionObject =>
        definitionRow(definitionObject.term, definitionObject.definition)
      )}
    </div>
  </Wrapper>
);

export default SelectedProblem;
