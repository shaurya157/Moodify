import React from 'react';
// import {browserHistory} from 'react-router'

class App extends React.Component {
  constructor(props){
    super(props);
    this.handlelogout = this.handlelogout.bind(this);
  }

  handlelogout(){
    this.props.logout();
    this.props.router.push('/');
  }

  render (){
    debugger;
    let logoutButton;
    if(this.props.loggedIn){
      logoutButton = <button onClick={this.handlelogout}>Log out</button>;
    }

    return (<div>
      {this.props.children}
      {logoutButton}
    </div>);
  }
}

export default App;
