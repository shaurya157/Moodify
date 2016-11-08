class Api::PlaylistfollowsController < ApplicationController
  def create
    playlist_follow = PlaylistFollow.new({user_id: params[:user_id], playlist_id: params[:playlist_id]})

    if playlist_follow.valid?
      playlist_follow.save
      render :show
    else
      render json: playlist_follow.errors.full_messages, status: 404
    end
  end

  def destroy
    playlist = PlaylistFollow.find_by_user_id_and_playlist_id(params[:user_id], params[:playlist_id])
    playlist.destroy
  end
end
