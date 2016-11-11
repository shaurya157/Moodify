import React from 'react';
import Masonry from 'react-masonry-component';
import PlaylistIndexItemContainer from '../playlists/playlist_index_item_container';
import {withRouter} from 'react-router';

class User extends React.Component{
  constructor(props){
    super(props);

    this.toggleFollow = this.toggleFollow.bind(this);
    this.logout = this.logout.bind(this);
  }

  toggleFollow(followed){
    return () => {
      if(followed === true) {
        this.props.deleteUserFollow(this.props.currentUser.id,
                                    this.props.user.id);
      } else {
        this.props.createUserFollow(this.props.currentUser.id,
                                    this.props.user.id);
      }
    };
  }

  logout(){
    this.props.logout();
  }

  render(){
    let divStyle = {
      backgroundImage: `url(${this.props.user.profile_image_url})`,
      backgroundSize: `cover`,
      backgroundPosition: `50%`,
    };

    let followed;
    if(this.props.user.id &&
      this.props.user.followers.find(el => el.id === this.props.currentUser.id)){
      followed = true;
    } else {
      followed = false;
    }

    let followOrLogoutButton;
    if(!(this.props.user.id === this.props.currentUser.id)){
      if(followed){
        followOrLogoutButton = <button onClick={this.toggleFollow(followed)}>Unfollow</button>;
      } else {
        followOrLogoutButton = <button onClick={this.toggleFollow(followed)}>Follow</button>;
      }
    } else {
      followOrLogoutButton = <button onClick={this.logout}>Logout</button>;
    }

    let followedPlaylists = this.props.user.followedPlaylists.map(el =>(
      <li key={el.id}>
        <PlaylistIndexItemContainer playlist={el}/>
      </li>
    ));

    let createdPlaylists = this.props.user.createdPlaylists.map(el =>(
      <li key={el.id}>
        <PlaylistIndexItemContainer playlist={el}/>
      </li>
    ));

    return (
      <div className='user-profile'>
       <div className='user-profile-container'>
          <div className='user-profile-details'>
            <div className='user-profile-picture'
            style={divStyle}></div>
            <div className='user-profile-name'>
              <span>User</span>
              <h1>{this.props.user.username}</h1>
              {followOrLogoutButton}
            </div>
          </div>

          <div className='user-profile-playlists'>
            <div className='followed-playlists-header'>
              Followed Playlists</div>
            <Masonry className='followed-playlists'
              elementType={'ul'}
              options={{fitWidth: true, columnWidth: 250 }}>
               {followedPlaylists}
             </Masonry>

             <div className='created-playlists-header'>
               Created Playlists</div>
             <Masonry className='created-playlists'
               elementType={'ul'}
               options={{fitWidth: true, columnWidth: 250 }}>
                {createdPlaylists}
              </Masonry>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(User);
