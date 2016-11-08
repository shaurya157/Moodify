import React from 'react';
import {withRouter} from 'react-router';

class PlaylistIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  handleClick(id){
    return (event) => {
      event.preventDefault();
      this.props.router.push(`/app/playlist/${id}`);
    };
  }

  render(){
    let divStyle = {
      backgroundImage: `url(${this.props.playlist.playlist_image_url})`,
      backgroundSize: `cover`,
      backgroundPosition: `50%`,
    };


    return(
      <div className='playlist-index-item'
        onClick={this.handleClick(this.props.playlist.id)}>
        <div className='playlist-index-item-image'
          style={divStyle}>
          <div className='playlist-index-item-title'>{this.props.playlist.title}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(PlaylistIndexItem);
