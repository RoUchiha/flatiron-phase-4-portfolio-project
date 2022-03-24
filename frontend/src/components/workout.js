class Workout {

    constructor(workoutJSON) {
        this.name = workoutJSON.name
        this.date = workoutJSON.date
        this.id = workoutJSON.id 
    }

    renderWorkout() {
        const workoutAll = document.getElementById('workouts-container')
        workoutAll.classList.add('workout')

        const workoutName = document.createElement('h1');
        workoutName.innerHTML - this.name;

        workoutName.id = `workout-${this.id}`;

        workoutName.date = `workout-date-${this.date}`

        workoutAll.appendChild(workoutName)

        const exerciseList = this.renderExercises()
        workoutName.appendChild(exerciseList)
    };


    renderExercises() {
        const exercises = this.exercises
        const list = document.createElement('ul')

        exercises.forEach(exercise => {
            const newExercise = new exercise(exercise)

            console.log(exercise, "exercise")

            const nameList = newExercise.renderExercise()

            list.appendChild(nameList)
        })
        return list
    }


}