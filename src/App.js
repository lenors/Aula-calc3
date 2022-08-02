import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}
`;

const H1 = styled.h1`
  color: green;
  font-family: "Mouse Memoirs", sans-serif;
  text-align: center;
  margin: 2vh;
`;

class Calculadora extends Component {
  state = {
    n1: "",
    n2: "",
    res: ""
  };

  handleChange1 = (e) => {
    this.setState({
      n1: Number(e.target.value)
    });
  };

  handleChange2 = (e) => {
    this.setState({
      n2: Number(e.target.value)
    });
  };

  div = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 / n2
      });
    } else {
      this.setState({
        res: "no value."
      });
    }
  };

  mult = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 * n2
      });
    } else {
      this.setState({
        res: "no value."
      });
    }
  };

  sub = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 - n2
      });
    } else {
      this.setState({
        res: "no value."
      });
    }
  };

  som = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: n1 + n2
      });
    } else {
      this.setState({
        res: "no value."
      });
    }
  };

  clear = () => {
    const { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        res: null,
        n1: 0,
        n2: 0
      });
    } else {
      this.setState({
        res: "no value."
      });
    }
  };

  render() {
    return (
      <main>
        <section>
          <GlobalStyle />
          <H1>React App Calc</H1>
          <h2>{this.state.res}</h2>
          <div>
            <input
              value={this.state.n1}
              type="number"
              onChange={this.handleChange1}
            />
            <input value={this.state.n2} onChange={this.handleChange2} />
          </div>
          <div>
            <button onClick={this.div}>/</button>
            <button onClick={this.mult}>*</button>
            <button onClick={this.sub}>-</button>
            <button onClick={this.som}>+</button>
            <button onClick={this.clear}>ERASE</button>
          </div>
        </section>
      </main>
    );
  }
}

export default Calculadora;
