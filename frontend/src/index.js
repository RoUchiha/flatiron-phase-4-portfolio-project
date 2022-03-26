const workouts = new WorkoutServices('http://localhost:3000/workouts')
const exercises = new ExerciseServices('http://localhost:3000/exercises')

document.addEventListener('DOMContentLoaded', () => {
    workouts.getWorkouts();
    form = document.getElementById('new-exercise-form');
    form.addEventListener('submit', exercises.formSubmit)
})

const incomplete = '&#x20DE;';
const complete = '&#x2705;';

const completeState = {
    '⃞': '✅',
    '✅': '⃞'
};

const allChecks = document.querySelectorAll(".complete-button");

function completeCheck(e) {
    const check = e.target;
    check.innerHTML = completeState[check.innerHTML];
}

for (const check of allChecks) {
    check.addEventListener("click", completeCheck);
}
