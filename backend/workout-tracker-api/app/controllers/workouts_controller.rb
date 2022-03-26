class WorkoutsController < ApplicationController
    


    def index
        workouts = Workout.all
        render json: workouts, include: :exercises
    end

    def show
       workout = Workout.find_by(id: params[:id])
       render json: workout
    end 

   

    
    private 

        

        

end
