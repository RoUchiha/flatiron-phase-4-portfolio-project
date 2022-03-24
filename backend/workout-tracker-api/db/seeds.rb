# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)



workout1 = Workout.create(name: "Sunday", date: Date.today)
workout2 = Workout.create(name: "Monday", date: Date.today)
workout3 = Workout.create(name: "Tuesday", date: Date.today)
workout4 = Workout.create(name: "Wednesday", date: Date.today)
workout5 = Workout.create(name: "Thursday", date: Date.today)
workout6 = Workout.create(name: "Friday", date: Date.today)
workout7 = Workout.create(name: "Saturday", date: Date.today)




exercise1 = Exercise.create(name: "bench press", category: "resistance", sets: 6, workout_id: workout2.id)