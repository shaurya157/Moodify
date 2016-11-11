Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      member do
        post 'follow'
        delete 'unfollow'
      end
    end
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:index]

    resources :playlists, only: [:index, :show, :create, :destroy] do
      member do
        post 'follow'
        delete 'unfollow'
        post 'add_song'
        delete 'remove_song'
      end
    end

    resources :search, only: [:index]
  end

  root to: 'static_pages#root'
end
