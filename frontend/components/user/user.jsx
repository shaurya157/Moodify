import React from 'react';

class User extends React.Component{
  constructor(props){
    super(props);
    this.user = props.user;
  }

// Recheck this in the future when using it for other user profiles
  componentWillMount(){
    this.props.requestUser(parseInt(this.props.params.userId));
  }

  render(){
    // const allPlaylists = this.user.playlists.concat(this.user.followed_playlists);
    // const playlists = allPlaylists.map((playlist) => (
    //   <li key={playlist.id}>
    //     <div className='user-playlist-title'>
    //       {playlist.title}
    //     </div>
    //   </li>
    // ));

    return (
      <div className='user-profile'>
        <div className='user-profile-header'>
          Profile
        </div>

        <div className='user-profile-details'>
          <div className='user-profile-contianer'>
            <div className='user-profile-picture'>
              <img src={this.user.profile_image_url}></img>
            </div>
            <h1 className='user-profile-username'>
              {this.user.username}
            </h1>
          </div>

          <div className='user-playlists-container'>
            <ul>

            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
