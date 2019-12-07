import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import './admin-login.scss'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import ReactSnackBar from "react-js-snackbar";
import {CONFIG,CONFIG_PATH} from '../../Shared/constant';
import axios from 'axios'
import {doLogin} from '../../actions/LoginActions'
import {LOCAL_STORAGE } from  '../../Shared/constant';
import Loader from 'react-loader-spinner'
import '../../Shared/loader.scss'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    isLoggedin : false,
    isLoading : false,
    email: '',
    password:'',
    visible: true,
    Showing: false   
    }

    componentDidMount(){
        if(LOCAL_STORAGE.KEYS.TOKEN){
          return(
          this.props.history.push('/file1'))
        }else{
          return( this.props.history.push(''))
        }
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
      if(this.state.email !== "" && this.state.password !== ""){
          
        this.setState({visible : false})

          let req = {
            email: this.state.email,
            password: this.state.password
          }

          await doLogin(req).then(data => {
            this.setState({visible : false})
            return (<Redirect to='/file1'  {...this.props}/>);
            }).catch(err=>{
              console.log(err)
              this.setState({visible : true})
            })
        }
      }
      

    render() {
        return (
            <div className="flex column center middle oz-login">
          {this.state.visible ? (
          <Card className="mat-card {loading: isLoading}">
          <div className="flex row column center">
             <img src={require('../../assets/oizom-about_org.png')} className="oz-login-logo" />
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
          ) : (
            <Card className="mat-card {loading: isLoading}">
                  <div className="flex row column center">
                     <img src={require('../../assets/oizom-about_org.png')} className="oz-login-logo" />
                  </div>
                <CardContent>
                <div className="flex column center t-center">
                <Loader
                    type="ThreeDots"
                    color="#489D87"
                    height={50}
                    width={100}
                    // timeout={this.state.visible} //3 secs
                  />
                   <div id="cssload-pgloading">
                      <div id="cssload-tag">
                      <span className="tag">#Know</span><span className="tag">What</span><span className="tag">You</span><span className="tag">Breathe</span>
                       </div>
                  </div>
                  </div>
                </CardContent>
                <CardActions>
                  {/* <Button size="small">Learn More</Button> */}
                </CardActions>
              </Card>
          )}

              
        </div>
        )
    }
}

export default Login
