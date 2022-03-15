class User < ApplicationRecord

    has_many :workouts, dependent: :destroy
    has_many :exercises, through: :workouts 

    validates :email, presence: {message: "You must provide an email."}
    validates :email, uniqueness: {message: "An account with this email already exists."}
    validates :email, format: {with: /\A([^\s]+)((?:[-a-z0-9]\.)[a-z]{2,})\z/i, message: "Email must be in standard format."}
    validates :firstname, presence: {message: "You must include your first name or a nickname."}
end
