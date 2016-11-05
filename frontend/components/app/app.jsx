import React from 'react';
import {withRouter} from 'react-router';
import SidebarContainer from '../sidebar/sidebar_container';
import BrowseContainer from '../browse/browse_container';
import PlayerContainer from '../player/player_container';
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
    <div className='wrapper'>
      <SidebarContainer />
      <BrowseContainer />
      <PlayerContainer />
      {this.props.children}
    </div>);
  }
}

export default withRouter(App);
