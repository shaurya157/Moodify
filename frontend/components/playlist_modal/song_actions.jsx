import React from 'react';

class SongActions extends React.Component{
  constructor(props){
    super(props);
    this.state = {showPlaylists: false};
  }

  render(){

    if(this.state.showPlaylists){
      return (
        <div className='song-actions-2'>

        </div>
      );
    } else {
      return(
        <div className='song-actions-2'>
          <ul>
            <li>
              <span>Play</span>
            </li>
            <li>
              <span>Add to Play Queue</span>
            </li>
            <li>
              <span>Add to...</span>
            </li>
          </ul>
        </div>
      );
    }
  }
}

export default SongActions;
