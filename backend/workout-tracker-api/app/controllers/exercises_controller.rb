class ExercisesController < ApplicationController



    def index
        
    end


    private 

        def set_user
            @user = User.find(params[:email])
        end

        

        def exercise_params
            params.require(:exercise).permit(:name, :type, :sets, :distance, :workout_id)
        end

end
