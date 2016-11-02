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
  }
// Why is this component on update and not componentDidMount
  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if(this.props.loggedIn){
      this.props.router.push('/');
    }
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.processForm(this.state);
  }

  update(place){
    return (event) => {
      this.setState({[place]: event.target.value});
      // might need to change this to currentTarget
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
        
        <form onSubmit={this.handleSubmit}>
          <input type='text'
            value={this.state.username}
            onChange={this.update('username')}
            placeholder='Username'/>

          <input type='password'
            value={this.state.password}
            onChange={this.update('password')}
            placeholder='Password'/>

          <input type='submit' value='Submit' />
        </form>

        <Link onClick={this.props.toggleForm}>{link}</Link>

        <ul className="login-errors">
          {errors}
        </ul>
      </div>
    );
  }
}

export default SessionForm;
