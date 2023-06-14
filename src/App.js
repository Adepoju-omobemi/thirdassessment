import './App.css';
import Userinput from './components/Userinput';
import Useroutput from './components/Useroutput';

import React, { Component } from 'react'

 class App extends Component {

  state = {
    
      username: 'mubarak'
  }

    nameChangeHandler = (e) =>{
      this.setState({username:e.target.value})
         };
    


  
  // rendering the components to App.js
  render() {
    return (
      <div className='App' >
        <Useroutput  username ={this.state.username}/>
        <Userinput change={this.nameChangeHandler} />
      </div>
    )
  }
}

export default App