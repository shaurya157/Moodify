class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.valid?
      @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  private
  def user_params
    params.permit(:user).require([:username, :password])
  end
end
