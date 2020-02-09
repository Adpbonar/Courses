class Course < ApplicationRecord
  has_many :sections
  has_many :episodes, through: :sections
  has_one_attached :video
end
