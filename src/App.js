import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
class App extends React.Component {
  state = {
    value: "0",
    memory: null,
    operator: null,
    decimal: null,
  };
  onPress = (content) => () => {
    const num = parseFloat(this.state.value);
    if (content === "AC") {
      this.setState({ value: "0" });
      this.setState({ memory: null });
      this.setState({ operator: null });
      return;
    }
    if (content === "+/-") {
      this.setState({ value: num * -1 });
      return;
    }
    if (content === "%") {
      this.setState({
        value: (num / 100).toString(),
      });
      this.setState({ memory: null });
      this.setState({ operator: null });

      return;
    }
    if (content === ".") {
      if (this.state.value.includes(".")) return;

      this.setState({ value: this.state.value + content });

      return;
    }
    if (content === "+") {
      if (this.state.operator !== null) {
        if (this.state.operator === "+") {
          this.setState({
            memory: this.state.memory + parseFloat(this.state.value),
          });
        } else if (this.state.operator === "−") {
          this.setState({
            memory: this.state.memory - parseFloat(this.state.value),
          });
        } else if (this.state.operator === "×") {
          this.setState({
            memory: this.state.memory * parseFloat(this.state.value),
          });
        } else if (this.state.operator === "÷") {
          this.setState({
            memory: this.state.memory / parseFloat(this.state.value),
          });
        }
      } else {
        this.setState({ memory: parseFloat(this.state.value) });
      }
      this.setState({ value: "0" });
      this.setState({ operator: "+" });

      return;
    }
    if (content === "−") {
      if (this.state.operator !== null) {
        if (this.state.operator === "+") {
          this.setState({
            memory: this.state.memory + parseFloat(this.state.value),
          });
        } else if (this.state.operator === "−") {
          this.setState({
            memory: this.state.memory - parseFloat(this.state.value),
          });
        } else if (this.state.operator === "×") {
          this.setState({
            memory: this.state.memory * parseFloat(this.state.value),
          });
        } else if (this.state.operator === "÷") {
          this.setState({
            memory: this.state.memory / parseFloat(this.state.value),
          });
        }
      } else {
        this.setState({ memory: parseFloat(this.state.value) });
      }
      this.setState({ value: "0" });
      this.setState({ operator: "−" });

      return;
    }
    if (content === "×") {
      if (this.state.operator !== null) {
        if (this.state.operator === "+") {
          this.setState({
            memory: this.state.memory + parseFloat(this.state.value),
          });
        } else if (this.state.operator === "−") {
          this.setState({
            memory: this.state.memory - parseFloat(this.state.value),
          });
        } else if (this.state.operator === "×") {
          this.setState({
            memory: this.state.memory * parseFloat(this.state.value),
          });
        } else if (this.state.operator === "÷") {
          this.setState({
            memory: this.state.memory / parseFloat(this.state.value),
          });
        }
      } else {
        this.setState({ memory: parseFloat(this.state.value) });
      }
      this.setState({ value: "0" });
      this.setState({ operator: "×" });

      return;
    }
    if (content === "÷") {
      if (this.state.operator !== null) {
        if (this.state.operator === "+") {
          this.setState({
            memory: this.state.memory + parseFloat(this.state.value),
          });
        } else if (this.state.operator === "−") {
          this.setState({
            memory: this.state.memory - parseFloat(this.state.value),
          });
        } else if (this.state.operator === "×") {
          this.setState({
            memory: this.state.memory * parseFloat(this.state.value),
          });
        } else if (this.state.operator === "÷") {
          this.setState({
            memory: this.state.memory / parseFloat(this.state.value),
          });
        }
      } else {
        this.setState({ memory: parseFloat(this.state.value) });
      }
      this.setState({ value: "0" });
      this.setState({ operator: "÷" });

      return;
    }
    if (content === "=") {
      if (this.state.operator === "+") {
        this.setState({
          value: (this.state.memory + parseFloat(this.state.value)).toString(),
        });
        return;
      } else if (this.state.operator === "−") {
        this.setState({
          value: (this.state.memory - parseFloat(this.state.value)).toString(),
        });
        return;
      } else if (this.state.operator === "×") {
        this.setState({
          value: (this.state.memory * parseFloat(this.state.value)).toString(),
        });
        return;
      } else if (this.state.operator === "÷") {
        this.setState({
          value: (this.state.memory / parseFloat(this.state.value)).toString(),
        });
        return;
      }
      this.setState({ memory: null });
      this.setState({ operator: null });
      return;
    }

    this.setState({
      value: parseFloat(num + content).toString(),
    });
    if (this.state.value[this.state.value.length - 1] === ".") {
      this.setState({ value: this.state.value + content });
    } else {
      this.setState({ value: parseFloat(num + content).toString() });
    }
  };
  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <div className="display">{value}</div>
        <div className="buttons">
          <Button onPress={this.onPress} content="AC" type="function" />
          <Button onPress={this.onPress} content="+/-" type="function" />
          <Button onPress={this.onPress} content="%" type="function" />
          <Button onPress={this.onPress} content="÷" type="operator" />
          <Button onPress={this.onPress} content="7" />
          <Button onPress={this.onPress} content="8" />
          <Button onPress={this.onPress} content="9" />
          <Button onPress={this.onPress} content="×" type="operator" />
          <Button onPress={this.onPress} content="4" />
          <Button onPress={this.onPress} content="5" />
          <Button onPress={this.onPress} content="6" />
          <Button onPress={this.onPress} content="−" type="operator" />
          <Button onPress={this.onPress} content="1" />
          <Button onPress={this.onPress} content="2" />
          <Button onPress={this.onPress} content="3" />
          <Button onPress={this.onPress} content="+" type="operator" />
          <Button onPress={this.onPress} content="0" />
          <Button onPress={this.onPress} content="." />
          <Button onPress={this.onPress} content="=" type="operator" />
        </div>
      </div>
    );
  }
}
// ± % ÷ × − + =

export default App;
