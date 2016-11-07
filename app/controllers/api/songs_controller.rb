class Api::SongsController < ApplicationController
  def index
    @songs = Song.all.limit(15)
    render :index
  end
end
