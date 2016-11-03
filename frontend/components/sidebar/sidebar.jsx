// putting this on hold till reducer is configured
import React from 'react';

class Sidebar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
    <div className='sidebar'>
      <div className='logo'>
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
          <div className='sidebar-item'>
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
    </div>);
  }
}

export default Sidebar;
