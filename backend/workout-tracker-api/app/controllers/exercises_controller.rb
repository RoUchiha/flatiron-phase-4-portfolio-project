class ExercisesController < ApplicationController



    def index
        exercises = Exercise.all 
        render json: exercises
    end

    def show
        exercise = Exercise.find_by(id: params[:id])
        render json: exercise
    end

    def create 
        exercise = Exercise.new(exercise_params)
        if exercise.save 
            render json: exercise
        else
            render json: {error: "There was an issue processing your request."}
        end
    end

    

    def destroy
        exercise = Exercise.find_by(id: params[:id])
        exercise.destroy
        render json: {message: "Exercise removed from workout"}
       
    end


    private 

        

        def exercise_params
            params.require(:exercise).permit(:id, :name, :category, :sets, :distance, :workout_id)
        end

end
