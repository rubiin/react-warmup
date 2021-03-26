import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {


  componentDidUpdate() {
    console.log("Counters update");
  }

  render() {
    const { onReset, onDelete, onIncrement, counters } = this.props;
    console.log("Counters rendered");
    return (
      <div>
        <div className="row">
          <button onClick={onReset} className="btn btn-primary btn-sm m-2">
            Reset
          </button>
        </div>
        {counters.map(counter => (
          <div className="row">
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={onDelete}
              onIncrement={onIncrement}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Counters;
