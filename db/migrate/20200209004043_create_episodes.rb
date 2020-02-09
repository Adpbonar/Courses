class CreateEpisodes < ActiveRecord::Migration[6.0]
  def change
    create_table :episodes do |t|
      t.belongs_to :sections, null: false, foreign_key: true

      t.timestamps
    end
  end
end
