import React, { Component } from "react";
import styled from "styled-components";

const ProblemTitle = styled.h1`
  color: #1f4177;
`;

class Problem extends Component {
  render() {
    const { title, description, solution, showSolution } = this.props.problem;
    return (
      <div>
        <ProblemTitle>{title}</ProblemTitle>
        <p>{description}</p>
        <a onClick={e => this.props.toggleSolution()}>See solution</a>
        {showSolution ? <p>{solution}</p> : null}
      </div>
    );
  }
}

export default Problem;
