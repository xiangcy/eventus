class StaticPagesController < ApplicationController
  def home
    @events = Event.find_with_reputation(:votes, :all, { :order => 'votes DESC'})
  end

  def about
  end
end
