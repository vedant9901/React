import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter ,
  Switch,
  
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Login from '../src/Component/Iot-Login/Login'
import File1 from './Component/Secure_Component/file1';
import {LOCAL_STORAGE } from  './Shared/constant';
import { height } from '@material-ui/system';
// import axios from 'axios'
// import axiosInstance from '../src/Assets/axios'
let CONFIG = require('./assets/config.json')


class App extends Component {
  state={
    loggedIn: false
  }
  componentDidMount(){
    if (localStorage.getItem(LOCAL_STORAGE.KEYS.TOKEN)) {
      this.setState({loggedIn : true})
    }
      if(CONFIG.DBURL){
        localStorage.setItem('oz-ultra-admin',JSON.stringify(CONFIG.ULTRA_ADMIN))
      }
  }
  render() {
    return (
      <div className="root">
          <BrowserRouter>
          <Route exact path="/" component={Login} {...this.Props}/>
          <Route exact path="/login" component={Login} {...this.Props} />
          <Route exact path='/file1' component={File1} {...this.Props}/>
         </BrowserRouter>
         </div>
    )
  }
}
export default App;
