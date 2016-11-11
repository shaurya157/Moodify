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
      p = PlaylistSong.new({playlist_id: @playlist.id, song_id: params[:song_id]})
      debugger
      p.save
      render :show
    else
      render json: @playlist.errors.full_messages, status: 404
    end
  end

  def follow
    @playlist_follow = PlaylistFollow.new({user_id: params[:user_id], playlist_id: params[:id]})
    if @playlist_follow.valid?
      @playlist_follow.save
      render 'api/playlists/playlist_show'
    else
      render json: @playlist_follow.errors.full_messages, status: 400
    end
  end

  def unfollow
    @playlist_follow = PlaylistFollow.find_by_user_id_and_playlist_id(params[:user_id], params[:id])

    if @playlist_follow.valid?
      @playlist_follow.destroy
      render 'api/playlists/playlist_show'
    else
      render json: @playlist_follow.errors.full_messages, status: 400
    end
  end

  def add_song
    @playlist_song = PlaylistSong.new({song_id: params[:song_id], playlist_id: params[:id]})
    @playlist_song.save
    render 'api/playlists/playlist_show'
  end

  def remove_song
    @playlist_song = PlaylistSong.find_by_song_id_and_playlist_id(params[:song_id], params[:id])
    @playlist_song.destroy
    render 'api/playlists/playlist_show'
  end

  def destroy
    @playlist = Playlist.find_by_id(params[:id])
    @playlist.destroy
    render 'api/playlists/playlist_show'
  end

  private
  def playlist_params
    params.require(:playlist).permit([:title, :user_id, :playlist_image_url])
  end
end
