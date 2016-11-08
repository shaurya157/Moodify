import React from 'react';
import Modal from 'react-modal';
import {playlistModalStyle} from '../../util/modal_styles';
import PlaylistTable from './playlist_table';
import {withRouter} from 'react-router';

class Playlist extends React.Component {
  constructor(props){
    super(props);
    this.state = {playListModal: false, playing: props.playing};
    this.closeModal = this.closeModal.bind(this);
    this.playPlaylist = this.playPlaylist.bind(this);
    this.createPlaylistFollow = this.createPlaylistFollow.bind(this);
  }

  componentWillMount(){
    let id = this.props.params.playlistId;
    this.props.requestPlaylist(id);
  }

  componentDidMount(){
    this.openModal();
  }

  openModal(){
    this.setState({playListModal: true});
  }

  playPlaylist(playlist){
    return(event) => {
      this.props.playPlaylist(playlist);
      this.setState({playing: true});
    };
  }

  createPlaylistFollow(userId, playlistId){
    return(event) => {
      this.props.createPlaylistFollow(userId, playlistId);
    };
  }

  closeModal(){
    this.props.clearPlaylist();
    this.setState({playListModal: false});
    this.props.router.push('/app');
  }

  render(){
    return(
      <div>
        <Modal isOpen={this.state.playListModal}
           onRequestClose={this.closeModal}
           style={playlistModalStyle(this.state.playing)}
           className='playlist-modal'>

           <PlaylistTable playlist={this.props.playlist}
             playPlaylist={this.playPlaylist}
             createPlaylistFollow={this.createPlaylistFollow}
             currentUser={this.props.currentUser}/>

        </Modal>
      </div>
    );
  }
}

export default withRouter(Playlist);
