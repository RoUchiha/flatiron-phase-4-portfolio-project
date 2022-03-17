class ExercisesController < ApplicationController



    def index
        exercises = Exercise.all 
        render json: ExerciseSerializer.new(exercises)
    end


    private 

        

        def exercise_params
            params.require(:exercise).permit(:name, :type, :sets, :distance, :workout_id)
        end

end
