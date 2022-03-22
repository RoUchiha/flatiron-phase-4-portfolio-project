class WorkoutsController < ApplicationController
    


    def index
        workouts = Workout.all
        options = { include: [:exercises] }
        render json: WorkoutSerializer.new(workouts, options)
    end

    def show
       workout = Workout.find_by(id: params[:id])
       render json: WorkoutSerializer.new(workout)
    end 

    def create
        workout = Workout.new(workout_params)
        if workout.save
            render json: WorkoutSerializer.new(workout)
        else
            render json: {status: :unprocessable_entity}
        end
    end

    def destroy
        workout = Workout.find_by(id: params[:id])
        if workout.destroy
            render json: {status: :ok}
        else
            render json: {status: :unprocessable_entity}
    end

    private 

        

        def workout_params
            params.require(:workout).permit(:name, :date)
        end

end
