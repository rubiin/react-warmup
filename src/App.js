import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";


class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ],
    error: null
  };

  constructor() {
    super();
    console.log("app constructor");
  }

  componentDidMount() {
    //AJAX calls
    console.log("app mounted");
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState(counters);
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  getErrorMessage = value => {
    if (value.length < 3) {
      return "Este campo deve conte ao menos 3 caracteres";
    }
    if (!value.includes("s")) {
      return "A entrada desse campo deve conter o caracter `s`";
    }
    return null;
  };

  render() {
    console.log("App - rendered");
    return (
      <React.Fragment>
        <main className="container">
          <Navbar totalCounter={this.state.counters.length}/>
          <div className="row">
            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
            />
          </div>

        </main>
      </React.Fragment>
    );
  }
}

export default App;
