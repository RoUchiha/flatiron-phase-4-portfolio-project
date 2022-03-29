class ExerciseSerializer < ActiveModel::Serializer

    attributes :id, :name, :category, :sets, :distance, :workout_id
    
end

# serializers allow us to specify an object's associations and translates the object into a format suitable for network transfer