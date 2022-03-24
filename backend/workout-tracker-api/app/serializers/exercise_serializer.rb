class ExerciseSerializer 

    include FastJsonapi::ObjectSerializer
    attributes :name, :category, :sets, :distance, :workout_id
    belongs_to :workout

end