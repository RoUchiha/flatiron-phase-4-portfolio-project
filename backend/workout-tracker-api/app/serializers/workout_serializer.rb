class WorkoutSerializer 

    include FastJsonapi::ObjectSerializer
    attributes :date, :name
    belongs_to :user
    has_many :exercises

    

end