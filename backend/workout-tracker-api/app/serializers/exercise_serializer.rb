class ExerciseSerializer < ActiveModel::Serializer

    
    attributes :id, :name, :category, :sets, :distance, :workout_id
    

end