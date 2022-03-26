class ExercisesController < ApplicationController



    def index
        exercises = Exercise.all 
        render json: ExerciseSerializer.new(exercises)
    end

    def show
        exercise = Exercise.find_by(id: params[:id])
        render json: ExerciseSerializer.new(exercise)
    end

    def create 
        exercise = Exercise.new(exercise_params)
        if exercise.save 
            render json: ExerciseSerializer.new(exercise)
        else
            render json: {error: "There was an issue processing your request."}
        end
    end

    

    def destroy
        exercise = Exercise.find_by(id: params[:id])
        if exercise.destroy
            render json: {message: "Exercise removed from workout"}
        else
            render json: {error: "There was an issue processing your request."}
        end
    end


    private 

        

        def exercise_params
            params.require(:exercise).permit(:name, :category, :sets, :distance, :workout_id)
        end

end
