import React from 'react';
import Modal from 'react-modal';
import {songActionModalStyle} from '../../util/modal_styles';
import SongActionModal from './song_action_modal';

class SongActions extends React.Component{
  constructor(props){
    super(props);
    this.state = {songActionModal: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(){
    this.setState({songActionModal: true});
  }

  closeModal(){
    this.setState({songActionModal: false});
  }

  render(){
    return(
      <div className='song-actions-2'>
        <img src='https://res.cloudinary.com/djv7nouxz/image/upload/q_50/v1478656649/ellipsis_szfcs8.png'
          onClick={this.openModal}></img>

        <Modal isOpen={this.state.songActionModal}
          onRequestClose={this.closeModal}
          style={songActionModalStyle}>

          <SongActionModal
            song={this.props.song}
            followedPlaylists={this.props.followed_playlists}
            addSongToPlaylist={this.props.addSongToPlaylist}
            playSong={this.props.playSong}
            addSongToQueue={this.props.addSongToQueue}
            closeModal={this.props.closeModal}/>
        </Modal>

      </div>
    );
  }
}

export default SongActions;
