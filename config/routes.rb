Rails.application.routes.draw do

get '/login' => 'users#index'
get '/game' => 'users#game'
get '/signup' => 'users#signup'
get '/leaderboard' => 'users#leaderboard'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
