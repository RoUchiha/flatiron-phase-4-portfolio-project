class Exercise < ApplicationRecord
  belongs_to :session

  validates :name, presence: {message: "Your exercise must have a name."}

end
