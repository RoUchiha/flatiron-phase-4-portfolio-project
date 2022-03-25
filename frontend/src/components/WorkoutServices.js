class WorkoutServices {

    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    getWorkouts() {
        fetch(this.baseURL)
        .then(resp => resp.json())
        .then (json => {
            json.forEach(workout => {
                const workouts = new Workout(workout);
                workouts.renderWorkout();
            })
        })
    }




}