import React from 'react';
import Masonry from 'react-masonry-component';
import PlaylistIndexItemContainer from '../playlists/playlist_index_item_container';

class User extends React.Component{
  constructor(props){
    super(props);

    this.toggleFollow = this.toggleFollow.bind(this);
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

    let followButton;
    let createNewPlaylist;
    if(!(this.props.user.id === this.props.currentUser.id)){
      if(followed){
        followButton = <button onClick={this.toggleFollow(followed)}>Unfollow</button>;
      } else {
        followButton = <button onClick={this.toggleFollow(followed)}>Follow</button>;
      }
    } else {
      createNewPlaylist = <li key={1000}>
        <PlaylistIndexItemContainer newPlaylist={true}/>
      </li>;
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
              {followButton}
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

export default User;
