class Exercise < ApplicationRecord
  belongs_to :workout

  validates :name, presence: {message: "Your exercise must have a name."}

end
