import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from '../src/Component/Login'
import { height } from '@material-ui/system';
// import axios from 'axios'
// import axiosInstance from '../src/Assets/axios'
let CONFIG = require('./assets/config.json')

class App extends Component {
  componentDidMount(){
      if(CONFIG.DBURL){
        localStorage.setItem('oz-ultra-admin',JSON.stringify(CONFIG.ULTRA_ADMIN))
      }
  }
  render() {
    return (
      <div id="root" className="root">
      <Router>
            <Switch>
               <Route exact path="">
                 <Login />
               </Route>
             </Switch>
         </Router>
         </div>
    )
  }
}
export default App;
