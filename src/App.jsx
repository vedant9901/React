import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router ,
  Route,
  HashRouter,
  Redirect 
} from "react-router-dom";
import secureFile from './Component/Secure_Component/file1'
import Login from '../src/Component/Iot-Login/Login'
// import axios from 'axios'
import { useHistory } from 'react-router-dom';

class App extends Component {
  state={
    loggedIn: false
  }
  
  componentDidMount(){
    // if(localStorage.getItem('isLoggedIn') !== null){
    //   localStorage.getItem('isLoggedIn') ?  this.props.history.push('/file1') : this.props.history.push('/')
    // }
  }
  render() {
    return (
      <div className="root">
          <Router>
          <HashRouter>
            <Route path="/" render={() => (<Redirect to="/login" />)} />
            <Route exact path='/login' component={Login} {...this.props}/> 
            <Route exact path='/file1' component={secureFile} {...this.props}/> 
          </HashRouter>
         </Router>
         </div>
    )
  }
}
export default App;
