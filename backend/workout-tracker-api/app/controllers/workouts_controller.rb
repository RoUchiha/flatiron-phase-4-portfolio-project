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

    private 

        

        def workout_params
            params.require(:workout).permit(:name, :date)
        end

end
