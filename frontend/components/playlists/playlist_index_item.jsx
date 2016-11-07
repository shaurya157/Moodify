import React from 'react';

class PlaylistIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let divStyle = {
      backgroundImage: `url(${this.props.playlist.playlist_image_url})`,
      backgroundSize: `cover`,
      backgroundPosition: `50%`,
    };


    return(
      <div className='playlist-index-item'>
        <div className='playlist-index-item-image'
          style={divStyle}>
          <div className='playlist-index-item-title'>{this.props.playlist.title}</div>
        </div>
      </div>
    );
  }
}

export default PlaylistIndexItem;
