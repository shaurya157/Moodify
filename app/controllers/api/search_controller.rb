class Api::SearchController < ApplicationController
  def index
    @songs = Song.where("lower(artist) LIKE :query OR lower(title) LIKE :query", query: "%#{search_params[:query].downcase}%")
    @playlists = Playlist.where("lower(title) LIKE :query", query: "%#{search_params[:query].downcase}%")
    @users = User.where("lower(username) LIKE :query", query: "%#{search_params[:query].downcase}%")

    render :index
  end

  private
  def search_params
    params.require(:search).permit(:query)
  end
end
