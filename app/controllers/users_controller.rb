class UsersController < ApplicationController

  def game
  end

  def index
  end

  def leaderboard
  end

  def signup
  end

  def createuser
    @user = User.new
  end

  def finduser
    @user = User.find(params[:user_id])
  end

  def show
    @users = User.all
  end
end
