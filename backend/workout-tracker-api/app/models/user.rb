class User < ApplicationRecord

    has_many :sessions, dependent: :destroy
    has_many :exercises, through: :sessions 

    validates :username, presence: {message: "You must provide a username."}
    validates :email, presence: {message: "You must provide an email."}
    validates :email, uniqueness: {message: "An account with this email already exists."}
    validates :username, length: {minimum: 4, message: "Username must be at least 4 characters long."}
    validates :email, format: {with: /\A([^\s]+)((?:[-a-z0-9]\.)[a-z]{2,})\z/i, message: "Email must be in standard format."}

end
