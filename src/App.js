import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//       <input type="text" onClick={()=>{console.log("クリック")}}/>
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return (
    <div>
      <Cat/>
      <Cat/>
      <Cat/>
      <Cat/>
      <Cat/>
    </div>
  )
}

const Cat = () => {
  return <div>mewewe</div>;
}


export default App;
