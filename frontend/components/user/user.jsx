import React from 'react';

class User extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let divStyle = {
      backgroundImage: `url(${this.props.user.profile_image_url})`,
      backgroundSize: `cover`,
      backgroundPosition: `50%`,
    };

    let followButton;
    if(!(this.props.user.id === this.props.currentUser.id)){
      followButton = <button>Follow</button>;
    }

    return (
      <div className='user-profile'>
        <div className='user-profile-container'>
          <div className='user-profile-details'>
            <div className='user-profile-picture'
              style={divStyle}>
            </div>
            <div className='user-profile-name'>
              <span>User</span>
              <h1>{this.props.user.username}</h1>
              {followButton}
            </div>
          </div>

          <div className='user-profile-playlists'>

          </div>
        </div>
      </div>
    );
  }
}

export default User;
