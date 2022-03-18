class Exercise < ApplicationRecord
  belongs_to :workout

  validates :name, presence: true
  before_validation { self.category = self.category.downcase }
  validates :category, presence: true, inclusion: {in: ["resistance", "cardio", "calisthenics"]}

end
