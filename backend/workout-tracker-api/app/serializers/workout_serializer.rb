class WorkoutSerializer 

    include FastJsonapi::ObjectSerializer
    attributes :date, :name, :id
    
    has_many :exercises

    

end