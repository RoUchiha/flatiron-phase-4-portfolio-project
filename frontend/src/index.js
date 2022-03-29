const workouts = new WorkoutServices('http://localhost:3000/workouts')
const exercises = new ExerciseServices('http://localhost:3000/exercises')

document.addEventListener('DOMContentLoaded', () => { 
    workouts.getWorkouts(); // callback function
    form = document.getElementById('new-exercise-form');
    form.addEventListener('submit', exercises.formSubmit);
});

// eventListener waits for the event associated with it to occur, then executes the functions/methods after that 'event' has happened
// i.e. wait for click on the assigned target, then execute code for that event

// arrow best for non-method functions, like simple manipulation or return of argument data
// good for DOM-level methods

// arrow to reg 
    // arg => { func } becomes: 
    // fx(arg) { 
    //    return func }











const allChecks = document.querySelectorAll(".complete-button");

function completeCheck(e) {
    const check = e.target;
    check.classList.add("ex-done");
}

for (const check of allChecks) {
    check.addEventListener("click", completeCheck);
}
