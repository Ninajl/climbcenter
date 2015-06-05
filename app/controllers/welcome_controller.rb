class WelcomeController < ApplicationController

  def index
    @response = RestClient.get "https://www.kimonolabs.com/api/9doxozu2?apikey=#{ENV['API_KEY']}"

    @response["results"]["Colorado_Gyms"]

  end

end
