// putting this on hold till reducer is configured
import React from 'react';
import {withRouter} from 'react-router';

class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.redirectToBrowse = this.redirectToBrowse.bind(this);
    this.redirectToProfilePage = this.redirectToProfilePage.bind(this);
  }

  redirectToBrowse(){
    this.props.router.push('/app');
  }

  redirectToProfilePage(){
    this.props.router.push(`/app/users/${this.props.currentUser.id}`);
  }

  render(){
    return (
    <div className='sidebar'>
      <div className='logo' onClick={this.redirectToBrowse}>
        <img src={'http://res.cloudinary.com/djv7nouxz/image/upload/q_50/v1478417702/logo_tscdje.png'}></img>
      </div>

      <ul>
        <li className='search'>
          <div className='sidebar-item'>
            <img src={'assets/search_logo.png'}></img>
            <p>Search</p>
          </div>
        </li>
        <li>
          <div className='sidebar-item' onClick={this.redirectToBrowse}>
            <img src={'http://res.cloudinary.com/djv7nouxz/image/upload/q_50/v1478417702/headphone_logo_cpvqvw.png'}></img>
            <p>Browse</p>
          </div>
        </li>
        <li>
          <div className='sidebar-item'>
            <img src={'assets/playlist.png'}></img>
            <p>Playlist</p>
          </div>
        </li>
      </ul>

      <div className='user-profile-sidebar'
        onClick={this.redirectToProfilePage}>
        <img src={this.props.currentUser.profile_image_url}></img>
      </div>
    </div>);
  }
}

export default withRouter(Sidebar);
