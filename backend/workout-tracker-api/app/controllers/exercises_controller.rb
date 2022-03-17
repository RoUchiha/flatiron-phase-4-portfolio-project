class ExercisesController < ApplicationController



    def index
        exercises = Exercise.all 
        render json: ExerciseSerializer.new(exercises)
    end


    private 

        def set_user
            @user = User.find_by(email: params[:email])
        end

        

        def exercise_params
            params.require(:exercise).permit(:name, :type, :sets, :distance, :workout_id)
        end

end
