import React from 'react';
import {Link} from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);

    if(this.props.demo){
      this.startUsernameAnimation();
    }
  }

  startUsernameAnimation(){
    this.clearFields();

    const demoName = 'DemoUser';
    let usernameID = setInterval(() => {
      document.getElementById('username').focus();
      let currLength = this.state.username.length;

      if(currLength < demoName.length){
        this.setState({username: this.state.username + demoName.slice(currLength, currLength + 1)});
      } else {
        clearInterval(usernameID);
        this.startPasswordAnimation();
      }
    }, 100);
  }

  startPasswordAnimation(){
    const demoPassword = 'password';
    let passwordID = setInterval(() => {
      document.getElementById('password').focus();
      let currLength = this.state.password.length;

      if(currLength < demoPassword.length){
        this.setState({password: this.state.password + demoPassword.slice(currLength, currLength + 1)});
      } else{
        clearInterval(passwordID);
        this.props.processForm(this.state);
      }
    }, 100);
  }

  clearFields(){
    this.setState({username: "", password: ""});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.processForm(this.state);
  }

  update(place){
    return (event) => {
      this.setState({[place]: event.target.value});
    };
  }

  render(){
    const link = this.props.formType === 'login' ? 'Sign Up' : 'Login';
    const header = this.props.formType === 'signup' ? 'Sign Up' : 'Login';

    const errors = this.props.errors.map(
      (error, idx) => <li key={idx} className='error'>{error}</li>);

    return (
      <div className='signup-form'>
        <div className='signup-form-header'>
          <h1>{header}</h1>
        </div>

        <form onSubmit={this.handleSubmit} className='signup-input-form'>
          <input type='text'
            id='username'
            value={this.state.username}
            onChange={this.update('username')}
            placeholder='Username'
            className="signup-input"/>

          <input type='password'
            id='password'
            value={this.state.password}
            onChange={this.update('password')}
            placeholder='Password'
            className='signup-input'/>

          <button type='submit'
            value='Submit'
            className='signup-input-submit'>Submit</button>
        </form>

        <div className='form-seperator'>
          <hr /><p>or</p><hr />
        </div>

        <Link onClick={this.props.toggleForm}>{link}</Link>

        <ul className="login-errors">
          {errors}
        </ul>
      </div>
    );
  }
}

export default SessionForm;
