class WorkoutSerializer < ActiveModel::Serializer

    attributes :date, :name, :id, :exercises
    
    has_many :exercises

    

end