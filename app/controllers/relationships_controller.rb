class RelationshipsController < ApplicationController
  before_filter :signed_in_user
  
  def create
    @user = User.find(params[:relationship][:liked_id])
    current_user.like!(@user)
    respond_to do |format|
      format.html { redirect_to @user }
      format.js
    end
  end
  
  def destroy
    @user = Relationship.find(params[:id]).liked
    current_user.unlike!(@user)
    respond_to do |format|
      format.html { redirect_to @user }
      format.js
    end
  end
  
end
