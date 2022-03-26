class WorkoutsController < ApplicationController
    


    def index
        workouts = Workout.all
        options = { include: [:exercises] }
        render json: workouts
    end

    def show
       workout = Workout.find_by(id: params[:id])
       render json: workouts
    end 

   

    
    private 

        

        

end
