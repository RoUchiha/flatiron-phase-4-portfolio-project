class UsersController < ApplicationController

    before_action :set_user, only: [:show, :update, :destroy]

    def index 
        users = User.all 
        render json: UserSerializer.new(users)
    end

    def create 
        if params["button"] = "SignUp"
            user = User.new(user_params)
            user.password = params[:password]
            if user.save
                render json: UserSerializer.new(user)
            else
                errors = user.errors.map {|message| message.message}.join(", ")
                render json: {errors: "#{errors}"}, status: :unprocessable_entity
            end
        elsif params["button"] === "edit-my-info"
            user_info = User.find_by(email: params[:email])
            if User.exists?(user_info.id)
                render json: UserSerializer.new(user_info)
            else
                render json: {status: :unprocessable_entity}
            end
        else
            user_info = User.find_by(email: params[:email])
            if user_info && user_info.authenticate(params[:password])
                render json: UserSerializer.new(user_info)
            else
                render json: {errors: "We could not verify your account info. Try logging in again or sign up if you do not have an account."}
            end
        end
    end

    def show
        user = @user
        render json: UserSerializer.new(user)
    end

    def update
        if @user.update(user_params)
            render json: UserSerializer.new(@user)
        else
            render json: {status: :unprocessable_entity}
        end
    end

    def destroy 
        if @user.destroy 
            render json: {status: :ok}
        else
            render json: {status: :unprocessable_entity}
        end
    end

    private 

        def set_user
            @user = User.find_by(email: params[:email])
        end

        def user_params
            params.require(:user).permit(:email, :firstname)
        end

end
