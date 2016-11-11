import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import SongsMiddleware from './song_middleware';
import PlaylistsMiddleware from './playlist_middleware';
import UserMiddleware from './user_middleware';
import SearchMiddleware from './search_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SongsMiddleware,
  PlaylistsMiddleware,
  UserMiddleware,
  SearchMiddleware
);

export default RootMiddleware;
