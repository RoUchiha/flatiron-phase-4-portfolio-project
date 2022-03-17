class UserSerializer

    include FastJsonapi::ObjectSerializer
    attributes :firstname, :email
    has_many :workouts 
    
    def total_workouts
        object.workouts.count
    end

end