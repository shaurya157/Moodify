import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import SongsMiddleware from './song_middleware';
import PlaylistsMiddleware from './playlist_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SongsMiddleware,
  PlaylistsMiddleware
);

export default RootMiddleware;
