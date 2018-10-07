import React, { Component } from "react";
import styled from "styled-components";

const ProblemTitle = styled.h1`
  color: #1f4177;
`;

const SolutionLink = styled.a`
  text-decoration: none !important;
`;

class Problem extends Component {
  render() {
    const { title, description, solution, showSolution } = this.props.problem;
    return (
      <div>
        <ProblemTitle>{title}</ProblemTitle>
        <p>{description}</p>
        <SolutionLink onClick={e => this.props.toggleSolution()}>
          {showSolution ? "Hide" : "See"} solution
        </SolutionLink>
        {showSolution ? <p>{solution}</p> : null}
      </div>
    );
  }
}

export default Problem;
