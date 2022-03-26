class Exercise < ApplicationRecord
  belongs_to :workout

  before_validation { self.category = self.category.capitalize }

end
