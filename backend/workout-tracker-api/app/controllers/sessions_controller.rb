class SessionsController < ApplicationController

    def index
        sessions = Session.all 
        render json: sessions, include: [:exercises]
    end

end
