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
  const profiles = [
    {name:"taro",age:10},
    {name:"aaa"}
  ]
  return (
    <div>
    {
      profiles.map((profile,index) => {
        return <User name={profile.name} age={profile.age} key={index} />
      })
    }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name},and {props.age} years old.</div>;
}
User.defaultProps = {
  age:1
}


export default App;
