class WorkoutServices {

    constructor(baseURL) {
        this.baseURL = baseURL; //this = the instance of WorkoutServices that was just created.
    };

    getWorkouts() {
        fetch(this.baseURL) //promise
        .then(resp => resp.json()) //use .then request to immediately act on the data we just received and convert to json
        .then (json => {
            json.forEach(workout => {
                const workouts = new Workout(workout);
                workouts.renderWorkout();
            });
        });
    }

    // fetch calls for resource from network/database (URL)
    // fetch method returns a promise that resolves into a Response object.
    // use .json() to convert into actual usable data
    // only rejects when there is network error, not for HTTP errors

}