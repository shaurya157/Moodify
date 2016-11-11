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
    let divStyle;

    if(this.props.newPlaylist){
      divStyle = {
        backgroundImage: `url('http://res.cloudinary.com/djv7nouxz/image/upload/h_250/v1478817193/photo-1455596120412-30a2e6c8e600_sloyf4.jpg')`,
        backgroundSize: `cover`,
        backgroundPosition: `50%`,
      };

      return(
        <div className='playlist-index-item'
          onClick={this.handleClick(null)}>
          <div className='playlist-index-item-image'
            style={divStyle}>
            <div className='playlist-index-item-title'>New Playlist</div>
          </div>
        </div>
      );
    } else {
      let imageUrl = this.props.playlist.playlist_image_url;
      let indexOfUpload = imageUrl.indexOf('upload');
      let croppedImageUrl = imageUrl.slice(0, indexOfUpload) + ('upload/h_250') + imageUrl.slice(indexOfUpload + 6, imageUrl.length);

      divStyle = {
        backgroundImage: `url(${croppedImageUrl})`,
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
}

export default withRouter(PlaylistIndexItem);
