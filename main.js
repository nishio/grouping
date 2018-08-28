'use strict';


const e = React.createElement;

class MyCircle extends React.Component {
    constructor(props) {
	super(props);
	this.state = { value: false };
	this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
	console.log("clicked");
	this.setState(prevState => {
		console.log(prevState);
		return {
		    value: !prevState.value
			};
	    });
    }

    render() {
	return (
      <circle
      onClick={this.handleClick}
        cx="50"
        cy="50"
        r="40"
        stroke="black"
        strokeWidth="4"
      fill={this.state.value ? "red" : "green"}
      />
		);
    }
}

ReactDOM.render(
  <svg width="100%" height="100%">
    <MyCircle />
  </svg>,
  document.getElementById("canvas")
		);
console.log("OK");

