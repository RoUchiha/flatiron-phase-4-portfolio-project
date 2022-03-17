class WorkoutsController < ApplicationController
    
    before_action :set_user, only: [:show, :index, :create, :update, :destroy]


    def index
        user = @user
        workouts = user.workouts
        render json: workouts, include: [:exercises]
    end

    def show
       workout = Workout.find(params[:id])
       render json: WorkoutSerializer.new(workout)
    end 

    private 

        def set_user
            @user = User.find_by(email: params[:email])
        end

        def workout_params
            params.require(:workout).permit(:name, :date, :user_id)
        end

end
