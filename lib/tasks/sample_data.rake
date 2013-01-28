namespace :db do
  desc "Fill database with sample data"
  task populate: :environment do
    require 'faker'
    make_users
    make_events
    make_relationships
    make_attendrelations
    make_comments
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
    
def make_events
  users = User.all
  users.each do |user|
    n = (8..12).to_a.sample
    n.times do |i|
      city = ['Boston', 'New York'].sample
      category = ['Music', 'Sports', 'Movies', 'Volunteer', 'Tour', 'Party'].sample
      time =  (Date.tomorrow + rand(10..20).hour).to_datetime
      endtime = time + rand(1..3).hour
      case city
        when 'Boston'
          place = "#{rand(100..300)} #{['Cambridge St', 'Atlantic Ave', 'State St', 'Congress St'].sample}"
        when 'New York'
          place = "#{rand(100..300)} #{['Broome St', 'Canel St', 'Grand St', 'Park Ave'].sample}"
      end 
      content = Faker::Lorem.paragraph(7)
      case category
        when 'Music'
          title = "#{['Folk Music','Classical Music','Pop music','Piano'].sample} #{['Concert','Speech','Discussion','Salon'].sample}"
        when 'Sports'
          title =  "#{['Swim','Football','Tennis','Basketball','Soccer'].sample} #{['Tournament', 'Competition', 'Club', 'Salon'].sample}"
        when 'Movies'
          title =   "#{['Action', 'Drama', 'Fantasy', 'Horror', 'Romance'].sample} #{['Show','Salon','Exploration','Night'].sample}"
        when 'Volunteer'
          title =   "#{['Old People', 'China', 'Children', 'Cancer'].sample} #{['Care', 'Forum', 'Salon'].sample}"
        when 'Tour'
          title =   "#{['Mountain', 'Beach', 'Countryside', 'Downtown'].sample} #{['Tour', 'Bicycle Tour', 'Walk'].sample}"
        when 'Party'
          title =  "#{['Women', 'Gentlemen', 'High School', 'Costume'].sample} #{['Party', 'Night', 'Social'].sample}"
      end
      user.events.create!(place: place, content: content, title: title, time: time, endtime: endtime,
      city: city, category: category)
    end
  end
end

def make_relationships
  User.all.each do |user|
    rand(6..15).times do |n|
      a = rand(1..99)
      if a!= user.id && !user.liking?(User.find(a))
        user.like!(User.find(a))
      end
    end
  end
end

def make_attendrelations
  Event.all.each do |event|
    rand(6..15).times do |n|
      a = rand(1..99) && !User.find(a).attending?(event)
      if a!= event.user.id
        User.find(a).attend!(event)
      end
    end
  end
end

def make_comments
  Event.all.each do |event|
    rand(3..5).times do |n|
      user = (1..99).to_a.sample
      body = Faker::Lorem.sentence(7)
      Comment.build_from(event, user, body).save
    end
  end
end
