import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import SongsMiddleware from './song_middleware';
import PlaylistsMiddleware from './playlist_middleware';
import UserMiddleware from './user_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SongsMiddleware,
  PlaylistsMiddleware,
  UserMiddleware
);

export default RootMiddleware;
