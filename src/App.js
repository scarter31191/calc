// import logo from './logo.svg';
// import './App.css';
import React, {Component} from "react";
import Button from "./components/Button"

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      current: '0',
      previous: []
    }
  }

  reset = () => {
    this.setState({result: '0'});
  }

  addToCurrent = (symbol) => {
    this.setState({current: this.state.current + symbol});
  }

  render() {
    const buttons = [
      {symbol: 'C', cols: 3, action: this.reset},
      {symbol: '/', cols: 1, action: this.addToCurrent}
    ]
    return (
      <div className="App">
        <input className="result" type="text" value={this.state.current} />
        <Button />
      </div>
    );
  }
}

export default App;
