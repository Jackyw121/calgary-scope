import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export class CreateAccount extends Component {
    constructor() {
        super()
      
        this.state = {
           userName: '',
           password: '',
           email: '',
           confirmPassword: ''
        }
  
        this.displayUser = this.displayUser.bind(this)
      }
      handleUsername = event => {
          this.setState({ userName: event.target.value});
      }
      handleEmail = event => {
        this.setState({ email: event.target.value});
    }
      handlePassword = event => {
          this.setState({ password: event.target.value});
      }
      handleConfirmPassowrd = event => {
          this.setState({ confirmPassword: event.target.value})
      }
      displayUser({}) {
          if (this.state.password !== this.state.confirmPassword) {
            alert('Your password does not match')
          }
          else {
              alert(`Hello ${this.state.userName} your email is ${this.state.email} 
              and your password is ${this.state.password}`)
          }
      }

  render() {
    return (
        <div>
            <h1>Sign Up</h1>
          <form>
            <div>
            <input onChange = {this.handleUsername} className = 'textfield' type ='text' placeholder='user name'></input><br></br>
            <input onChange = {this.handleEmail} className = 'textfield' type ='text' placeholder='email'></input><br></br>
            <input onChange = {this.handlePassword} className = 'textfield' type ='password' placeholder='password'></input><br></br>
            <input onChange = {this.handleConfirmPassowrd} className = 'textfield' type ='password' placeholder='confirm password'></input>
            </div>
            <div>
                <Button type="submit" variant="contained" color="secondary">
                    Create Account
                </Button>
            </div>
          </form>
        </div>
    )
  }
}

export default CreateAccount