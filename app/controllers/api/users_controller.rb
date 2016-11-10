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
      render 'api/users/playlists'
    else
      render :show_user
    end
  end

  def follow
    @user_follow = UserFollow.new({follower_id: params[:follower_id], followee_id: params[:id]})

    @user_follow.save
    render 'api/users/static'
  end

  def unfollow
    @user_follow = UserFollow.find_by_follower_id_and_followee_id(params[:follower_id], params[:id])

    @user_follow.destroy
    render 'api/users/static'
  end

  private
  def user_params
    params.require(:user).permit([:username, :password])
  end
end
