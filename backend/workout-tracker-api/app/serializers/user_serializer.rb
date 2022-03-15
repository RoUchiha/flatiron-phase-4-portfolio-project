class UserSerializer

    include FastJsonapi::ObjectSerializer
    attributes :firstname, :email, :total_workouts
    has_many :workouts 
    
    def total_workouts
        object.workouts.count
    end

end