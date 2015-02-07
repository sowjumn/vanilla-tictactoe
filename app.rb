require 'sinatra'
class PracticePatterns < Sinatra::Application
  get '/' do 
    erb :index
  end
end