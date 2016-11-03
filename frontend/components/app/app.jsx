import React from 'react';
import {withRouter} from 'react-router';

class App extends React.Component {
  constructor(props){
    super(props);
    this.handlelogout = this.handlelogout.bind(this);
  }

  componentWillReceiveProps(newProps){
    if(!newProps.currentUser){
      this.props.router.push('/');
    }
  }

  handlelogout(){
    this.props.logout();
  }

  render (){
    let logoutButton;
    if(this.props.currentUser){
      logoutButton = <button onClick={this.handlelogout}
                        className='logout-button'>Log out</button>;
    }

    return (
    <div>
      {this.props.children}
      <h1>Welcome {this.props.currentUser.username}!</h1>
      {logoutButton}
    </div>);
  }
}

export default withRouter(App);
