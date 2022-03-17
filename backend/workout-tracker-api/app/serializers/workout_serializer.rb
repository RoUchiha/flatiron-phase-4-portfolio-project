class WorkoutSerializer 

    include FastJsonapi::ObjectSerializer
    attributes :date, :name
    
    has_many :exercises

    

end