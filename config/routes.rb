Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:index]

    resources :playlists, only: [:index, :show, :create] do
      member do
        get 'follow'
        delete 'unfollow'
      end
    end
    resources :playlistfollows, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
