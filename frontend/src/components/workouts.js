class Workouts {

    constructor() {
        this.workouts = []
        this.initBindingsAndEventListeners()
        this.adapter = new WorkoutsAdapter()
        this.fetchAndLoadWorkouts
    }

    initBindingsAndEventListeners() {
        this.workoutsContainer = document.getElementById('workouts-container')
        this.newWorkoutName = document.getElementById('new-workout-name')
        this.newWorkoutDate = document.getElementById('new-workout-date')
        this.newWorkoutExercise = document.getElementById('new-workout-exercise')
        this.workoutForm = document.getElementById('new-workout-form')
        this.workoutForm.addEventListener('submit', this.createWorkout.bind(this))     
    }

    createWorkout(w){
        w.preventDefault()
        const name = this.newWorkoutName.value 
        const date = this.newWorkoutDate.value 

        this.adapter.createWorkout(name, date).then(workout => {
            this.workouts.push(new Workout(workout))
            this.resetField()
            this.render()
        })
    }

    fetchAndLoadWorkouts() {
        this.adapter 
        .getWorkouts()
        .then(workouts => {
            workouts.forEach(workout => this.workouts.push(new Workout(workout)))
        })
        .then(() => {
            this.render()
        })
    }

    resetField() {
        this.newWorkoutName = ''
        this.newWorkoutDate = ''
    }

    render() {
        this.workoutsContainer.innerHTML = this.workouts.map(workout => workout.renderCard()).join('')
    }

   


}