import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import './admin-login.scss'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import ReactSnackBar from "react-js-snackbar";
import {getAqi} from '../actions/LoginActions'

class Login extends Component {
  state = {
    isLoggedin : false,
    email: '',
    password:'',
    Show: false,
    Showing: false   
    }


    onInputChange = (e) =>{
      if(e.target.id === 'email'){
       this.setState({
         email: e.target.value
        })
      }else{
        this.setState({
          password: e.target.value
        })
      }
    }  
   async doAdminLogin(e){
     if(this.state.email === '' || this.state.password === ''){
                this.setState({ Show: true, Showing: true });
                  setTimeout(() => {
                    this.setState({ Show: false, Showing: false });
                  }, 3000);
            }
            else{
            // this.getAqi()
        }
      }

    render() {
        return (
            <div className="flex column center middle oz-login">
              <Card className="mat-card">
                  <div className="flex row column center">
                     <img src={require('../assets/oizom-about_org.png')} className="oz-login-logo" />
                  </div>
                <CardContent>
                <form noValidate autoComplete="off">
                <div className="flex column center t-center">
                    <div className="loginInputs">
                      <TextField id="email" type="email" label="Email Id" className="input" required onChange={(e)=>{this.onInputChange(e)}} value={this.state.email}/>
                    </div>
                    <div className="loginInputs">
                      <TextField id="password"  type="password" label="********" className="input" required  onChange={(e)=>{this.onInputChange(e)}} value={this.state.password}/>
                    </div>
                    <div className="flex row center ozi-box">
                    <Button className="oz-button-sub" onClick={(e)=>{this.doAdminLogin(e)}}>
                      Sign In
                    </Button>
                    </div>
                </div>
                </form>
                </CardContent>
                <CardActions>
                  {/* <Button size="small">Learn More</Button> */}
                </CardActions>
              </Card>   
              <ReactSnackBar Icon={<span>🦄</span>} Show={this.state.Show}>
                  Please enter Email Id and Password !
              </ReactSnackBar>
            </div>
        )
    }
}

export default Login
