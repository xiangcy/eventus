namespace :db do
  desc "Fill database with sample data"
  task populate: :environment do
    require 'faker'
    make_users
  end
end

def make_users
  99.times do |n|
    name = Faker::Name.name
    email = "XDL-#{n+1}@eventus.com"
    password = "123456"
    User.create!(name: name,
                email: email,
                password: password,
                password_confirmation: password)
  end
  User.all.each do |user|
    gender = ['', 'Male', 'Female'].sample
    city = ['', 'Boston', 'New York'].sample
    blog = Faker::Internet.url
    hobby = "#{['swim','sing','dance','basketball','travel','movie','novel','opera','web programming'].sample}, #{['swim','sing','dance','basketball','travel','movie','novel','opera','web programming'].sample}"
    user.update_attributes(:gender => gender,  :hobby => hobby, :blog => blog, :city => city)
  end
end
    
