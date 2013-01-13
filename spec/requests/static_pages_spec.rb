require 'spec_helper'

describe "Static Pages" do
  describe "Home page" do
    it "should ahve the title 'Home'" do
      visit root_path
      page.should have_selector('title', :text => "| Home")
    end
  end
  
  describe "about page" do
    it "should have the title 'about'" do
      visit about_path
      page.should have_selector('title', :text => "| About")
    end
  end
  
end
