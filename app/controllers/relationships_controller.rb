class RelationshipsController < ApplicationController
  before_filter :signed_in_user
  
  def create
    @user = User.find(params[:relationship][:liked_id])
    current_user.like!(@user)
    redirect_to @user
  end
  
  def destroy
    @user = Relationship.find(params[:id]).liked
    current_user.unlike!(@user)
    redirect_to @user
  end
  
end
