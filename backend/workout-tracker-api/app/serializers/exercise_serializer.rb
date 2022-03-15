class ExerciseSerializer 

    include FastJsonapi::ObjectSerializer
    attributes :name, :type, :sets, :distance
    belongs_to :workout

end