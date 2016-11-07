class Api::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.all
    render :index
  end

  def show
    @playlist = Playlist.find_by_id(params[:id])
    render :show
  end

  def create
    @playlist = Playlist.new(playlist_params)

    if @playlist.valid?
      @playlist.save
    else
      render json: @playlist.errors.full_messages, status: 401
    end
  end

  private
  def playlist_params
    params.require(:playlist).permit([:title, :description, :user_id, :playlist_image_url])
  end
end
