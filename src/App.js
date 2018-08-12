import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <input type="text" onClick={()=>{console.log("クリック")}}/>
      </React.Fragment>
    )
  }
}

export default App;
