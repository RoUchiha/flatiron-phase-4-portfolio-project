class UsersController < ApplicationController

    before_action :set_user, only: [:show, :destroy]


    def show
        user = @user
        render json: user, include: ['workouts', 'workouts.exercises']
    end


    private 

        def set_user
            @user = User.find(params[:email])
        end

        def user_params
            params.require(:user).permit(:email, :firstname)
        end

end
