class UsersController < ApplicationController
  def index
  end

  def signup
  end

  def game
  end

  def leaderboards
  end

  def createuser
    @user = User.new
  end

end
