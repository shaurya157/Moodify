import React from 'react';

class SongIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClickPlay = this.handleClickPlay.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);
  }

  handleClickPlay (song){
    return (event) => {
      event.preventDefault();
      if(this.props.playing && this.props.song.id === song.id){
        console.log(this.props.song);
        console.log(song);
        this.props.pauseSong();
      } else {
        console.log('playing');
        this.props.playSong(song);
      }
    };
  }

  handleClickAdd(song){
    return(event) => {
      event.preventDefault();
      this.props.addSongToQueue(song);
    };
  }

  render(){
    let divStyle = {
      backgroundImage: `url(${this.props.song.song_image_url})`,
      backgroundSize: `cover`,
      backgroundPosition: `50%`,
    };

    let playSongImageUrl;
    if(this.props.currentSong.id && this.props.currentSong.id === this.props.song.id){
      playSongImageUrl =
      'http://res.cloudinary.com/djv7nouxz/image/upload/v1478395090/pause_button_jjepd0.png';
    } else {
      playSongImageUrl =
      'http://res.cloudinary.com/djv7nouxz/image/upload/v1478395268/play_button_xe3rjt.png';
    }

    return (
      <div className='song-index-item'>
        <div className='song-index-item-image'
          style={divStyle}>
          <div className='song-actions'>
            <div className='play-song'
              onClick={this.handleClickPlay(this.props.song)}>
              <img src={playSongImageUrl}></img>
            </div>
            <div className='add-song-to-queue'
              onClick={this.handleClickAdd(this.props.song)}>
              <img src='http://res.cloudinary.com/djv7nouxz/image/upload/v1478395302/add_button_i2nll4.png'></img>
            </div>
          </div>
        </div>

        <div className='song-details'>
          <span className='song-index-item-title'>{this.props.song.title}</span>
          <span className='song-index-item-artist'>{this.props.song.artist}</span>
          <span className='song-index-item-album'>{this.props.song.album}</span>
        </div>
      </div>
    );
  }
}


export default SongIndexItem;
