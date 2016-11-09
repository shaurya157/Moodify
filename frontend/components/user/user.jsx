import React from 'react';

class User extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='user-profile'>
        <div className='user-profile-container'>
          <div className='user-profile-header'>
            Profile
          </div>

          <div className='user-profile-details'>
            <div className='user-profile-contianer'>
              <div className='user-profile-picture'>
                <img src={this.props.user.profile_image_url}></img>
              </div>
              <h1 className='user-profile-username'>
                {this.props.user.username}
              </h1>
            </div>

            <div className='user-playlists-container'>
              <ul>

              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
