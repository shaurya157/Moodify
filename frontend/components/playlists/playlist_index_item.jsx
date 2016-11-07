import React from 'react';
import Modal from 'react-modal';
import {playlistModalStyle} from '../../util/modal_styles';
import PlaylistContainer from '../playlist_modal/playlist_container';

class PlaylistIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {playlistModal: false};
    this.openModal = this.openModal.bind(this);
  }

  openModal(id){
    return () => {
      this.props.requestPlaylist(id);
      this.setState({playlistModal: true});
    };
  }

  closeModal(){
    this.setState({playlistModal: false});
  }

  render(){
    let divStyle = {
      backgroundImage: `url(${this.props.playlist.playlist_image_url})`,
      backgroundSize: `cover`,
      backgroundPosition: `50%`,
    };


    return(
      <div className='playlist-index-item'
        onClick={this.openModal(this.props.playlist.id)}>
        <div className='playlist-index-item-image'
          style={divStyle}>
          <div className='playlist-index-item-title'>{this.props.playlist.title}</div>
        </div>

        <Modal isOpen={this.state.playlistModal}
          onRequestClose={this.closeModal.bind(this)}
          style={playlistModalStyle}>

          <PlaylistContainer
            closeModal={this.closeModal.bind(this)}/>
        </Modal>
      </div>
    );
  }
}

export default PlaylistIndexItem;
