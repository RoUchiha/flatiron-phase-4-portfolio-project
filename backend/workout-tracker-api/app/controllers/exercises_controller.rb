class ExercisesController < ApplicationController



    def index
        exercises = Exercise.all 
        render json: ExerciseSerializer.new(exercises)
    end

    def create 
        exercise = Exercise.new(exercise_params)
        if exercise.save 
            render json: WorkoutSerializer.new(workout)
        else
            render json: {status: :unprocessable_entity}
        end
    end

    def update
        exercise = Exercise.find_by(id: params[:id])
        if exercise.update(exercise_params)
            render json: WorkoutSerializer.new(exercise)
        else
            render json: {status: :unprocessable_entity}
        end
    end

    def destroy
        exercise = Exercise.find_by(id: params[:id])
        if exercise.destroy
            render json: {status: :ok}
        else
            render json: {status: :unprocessable_entity}
        end
    end


    private 

        

        def exercise_params
            params.require(:exercise).permit(:name, :category, :sets, :distance, :workout_id)
        end

end
