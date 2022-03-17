class ExerciseSerializer 

    include FastJsonapi::ObjectSerializer
    attributes :name, :category, :sets, :distance
    belongs_to :workout

end