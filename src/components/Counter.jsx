import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: props.count,
    };
    console.log("1st");
    this.interval = setInterval(() => console.log(1), 2000);
  }

  dec = () => {
    const currentCount = this.state.count;
    this.setState({
      count: currentCount - this.props.value,
    });
  };

  inc = () => {
    const currentCount = this.state.count;
    this.setState({
      count: currentCount + this.props.value,
    });
  };

  componentDidMount = () => {
    console.log("Mounted");
  };

  shouldComponentUpdate = () => {
    console.log("Should Mount");
    return true;
  };

  componentDidUpdate = () => {
    console.log("Updated");
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
    console.log("Unmonted");
  };

  render() {
    console.log("Inside Render");
    return (
      <>
        <p className="mt-5">This is a Counter</p>
        <div className="flex items-center justify-center gap-3 my-4">
          <button onClick={this.dec}>-</button>
          <p>{this.state.count}</p>
          <button onClick={this.inc}>+</button>
        </div>
      </>
    );
  }
}

export default Counter;
