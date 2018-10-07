import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

import Navigation from "../Navigation/container";

const ProblemTitle = styled.h1`
  color: #1f4177;
  padding: 50px 60px;
`;

const Authors = styled.span`
  color: #1f4177;
  font-weight: bold;
`;

const Wrapper = styled.div`
  font-family: Open Sans, sans-serif;
  color: #3a3a3a;
`;

const ReferencesWrapper = styled.div`
  padding-left: 77px;
`;

const references = [
  {
    authors: "Combinatorial Explosion",
    reference:
      "Definition of insight. Definition of insight. Definition of insight."
  },
  {
    authors: "Insight",
    reference:
      "Definition of insight. Definition of insight. Definition of insight."
  },
  {
    authors: "Insight Problem",
    reference:
      "Definition of insight. Definition of insight. Definition of insight."
  },
  {
    authors: "Non-Insight Problem",
    reference:
      "Definition of insight. Definition of insight. Definition of insight."
  },
  {
    authors: "Problem Reformulation",
    reference:
      "Definition of insight. Definition of insight. Definition of insight."
  }
];

const definitionRow = (authors, definition) => (
  <Row>
    <p>
      <Authors>{authors}</Authors> {definition}
    </p>
  </Row>
);

const SelectedProblem = () => (
  <Wrapper className="App">
    <Navigation />
    <div className="container">
      <ProblemTitle>References</ProblemTitle>
      <ReferencesWrapper>
        {references.map(referenceObject =>
          definitionRow(referenceObject.authors, referenceObject.reference)
        )}
      </ReferencesWrapper>
    </div>
  </Wrapper>
);

export default SelectedProblem;
