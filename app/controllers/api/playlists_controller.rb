class Api::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.all
    render :index
  end

  def show
    @playlist = Playlist.find_by_id(params[:id])
    render :show
  end
end
