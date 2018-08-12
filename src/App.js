import React from 'react';
import PropTypes from 'prop-types';

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
    {name:"aaa",age:10},
    {name:"aaa",age:12}
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
User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}


export default App;
