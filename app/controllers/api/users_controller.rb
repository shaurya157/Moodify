class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.valid?
      @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = User.find_by_id(params[:id])

    if params[:need_playlist]
      render json: @user.followed_playlists
    else
      render :show
    end
  end

  private
  def user_params
    params.require(:user).permit([:username, :password])
  end
end
