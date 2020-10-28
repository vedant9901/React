import React, { Component } from 'react'
import './login.scss'
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import {checkLogin} from '../../actions/LoginActions'
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
//import { Alert } from '@material-ui/lab';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}



class Login extends Component {

  /* Declaring states */
  state = {
    isLoggedin: false,
    isLoading: false,
    email: '',
    password: '',
    visible: true,
    Showing: false,
    isEmailError: false,
    isPasswordError: false
  }

  /* React Lifecycle */
  componentDidMount() {
    if(localStorage.getItem('isLoggedIn') !== null){
      localStorage.getItem('isLoggedIn') ?  this.props.history.push('/file1') : this.props.history.push('/')
    }
   }
  /* Function called when user inputs a char in input field */
  onInputChange = (e) => {
    if (e.target.id === 'email') {
      //Regex to test emailId
      new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(e.target.value) ? this.setState({ isEmailError: false }) : this.setState({ isEmailError: true })
      this.setState({
        email: e.target.value
      })
    } else {
      //Regex to test password
      new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})").test(e.target.value) ? this.setState({ isPasswordError: false }) : this.setState({ isPasswordError: true })
      this.setState({
        password: e.target.value
      })
    }
  }


  async doLogin(e) {
    if (this.state.email !== "" && this.state.password !== "") {

      this.setState({ visible: false })

      let req = {
        email: this.state.email,
        password: this.state.password
      }

      let res ;
      res = await checkLogin(req,res)
      if(res.status === 200){
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('response', JSON.stringify(res));
        localStorage.setItem('email', res.email);
        this.props.history.push('/file1');
      }else{
        localStorage.setItem('isLoggedIn', false);
      }
    }
  }

  render() {
  
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className='bold-line'></div>

          <div className='container'>
            <div className='window'>
              <div className='overlay'></div>
              <div className='content'>
                <div className='welcome'>Hello There!</div>

                <form noValidate autoComplete="off" className="formDiv">
                  <div className="flex column center login-input-container">
                    <div className="loginInputs">
                      <TextField id="email" type="email" label="someone@abc.com" className="input"  onChange={(e) => { this.onInputChange(e) }} value={this.state.email} />
                    </div>
                    <div className="loginInputs">
                      <TextField id="password" type="password" label="********" className="input"  onChange={(e) => { this.onInputChange(e) }} value={this.state.password} />
                    </div>
                    <div className="btn">
                    <Button className="button"  onClick={(e)=>{this.doLogin(e)}}>
                      Login
                    </Button>
                    </div>
                  </div>
                </form>
                {this.state.isEmailError ? (<Alert severity="error" >Please enter proper EmailId !</Alert>) : null}
                {this.state.isPasswordError ? (<Alert severity="error" >Password needs min 8 characters, 1 caps, 1 special and 1 number !</Alert>) : null}

              </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Login
