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
    let currentUserPicture;
    if(this.props.currentUser.profile_image_url.length > 0){
      currentUserPicture = this.props.currentUser.profile_image_url;
    } else {
      currentUserPicture = 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478546800/FullSizeRender_f0dshm.jpg';
    }

    return (
    <div className='sidebar'>
      <div className='logo' onClick={this.redirectToBrowse}>
        <img src={'assets/logo.png'}></img>
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
            <img src={'assets/headphone_logo.png'}></img>
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
        <img src={currentUserPicture}></img>
      </div>
    </div>);
  }
}

export default withRouter(Sidebar);
