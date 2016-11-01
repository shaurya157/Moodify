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
    const link = this.props.formType === 'login' ? 'signup' : 'login';
    const errors = this.props.errors.map(
      (error, idx) => <li key={idx} className='error'>{error}</li>);

    return (
      <div className='form'>
        <h1 className='formType'>{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit}>
          Username
          <input type='text'
            value={this.state.username}
            onChange={this.update('username')} />

          Password
          <input type='password'
            value={this.state.password}
            onChange={this.update('password')} />

          <input type='submit' value='Submit' />
        </form>

        <Link to={`/${link}`}>{link}</Link>

        <ul className="login-errors">
          {errors}
        </ul>
      </div>
    );
  }
}

export default SessionForm;
