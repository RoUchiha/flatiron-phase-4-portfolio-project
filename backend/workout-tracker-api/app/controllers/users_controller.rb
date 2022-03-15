class UsersController < ApplicationController

    def show
        user = User.find_by(email: params[:email])
        render json: user, include: ['workouts', 'workouts.exercises']
    end


end
