class WorkoutsController < ApplicationController

    def index
        user = User.find_by(email: params[:email])
        workouts = user.workouts
        render json: workouts, include: [:exercises]
    end

    def show
        render 
    end 

end
