class WorkoutSerializer 

    include FastJsonapi::ObjectSerializer
    attributes :date
    belongs_to :user
    has_many :exercises

    

end