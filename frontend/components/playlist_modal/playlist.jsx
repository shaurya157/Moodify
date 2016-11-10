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
    this.deletePlaylistFollow = this.deletePlaylistFollow.bind(this);
    this.playSong = this.playSong.bind(this);
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
      event.preventDefault();
      this.props.playPlaylist(playlist);
      this.setState({playing: true});
    };
  }

  playSong(song){
    return(event) => {
      this.props.playSong(song);
      this.setState({playing: true});
    };
  }

  createPlaylistFollow(playlistId){
    return(event) => {
      event.preventDefault();
      this.props.createPlaylistFollow(this.props.currentUser.id, playlistId);
    };
  }

  deletePlaylistFollow(playlistId){
    return(event) =>{
      event.preventDefault();
      this.props.deletePlaylistFollow(this.props.currentUser.id, playlistId);
    };
  }

  closeModal(){
    this.props.clearPlaylist();
    this.setState({playListModal: false});
    this.props.router.push('/app');
  }

  render(){
    let followed;
    if(this.props.followedPlaylists.find(el => el.id === this.props.playlist.id)){
      followed = true;
    } else {
      followed = false;
    }

    return(
      <div>
        <Modal isOpen={this.state.playListModal}
           onRequestClose={this.closeModal}
           style={playlistModalStyle(this.state.playing)}
           className='playlist-modal'>

           <PlaylistTable
             playlist={this.props.playlist}
             playPlaylist={this.playPlaylist}
             createPlaylistFollow={this.createPlaylistFollow}
             deletePlaylistFollow={this.deletePlaylistFollow}
             playSong={this.playSong}
             followed={followed}/>

        </Modal>
      </div>
    );
  }
}

export default withRouter(Playlist);
