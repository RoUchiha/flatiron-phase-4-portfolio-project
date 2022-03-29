class ExerciseServices {

    formSubmit(e){
        e.preventDefault()
        const exerciseName = document.getElementById('new-exercise-name');
        const exerciseCategory = document.getElementById('exercise-category-dropdown');
        const exerciseSets = document.getElementById('new-exercise-sets');
        const exerciseDistance = document.getElementById('new-exercise-distance');
        const exerciseWorkoutId = document.getElementById('workout_id');
        const form = document.getElementById('new-exercise-form')
        const exerciseValues = {
            name: exerciseName.value,
            category: exerciseCategory.value,
            sets: exerciseSets.value,
            distance: exerciseDistance.value,
            workout_id: workout_id.value 
        };

        const configExercise = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(exerciseValues)
        };

        // JSON.stringify converts JS object into a JSON string while replacing values or including properties that were specified as argument

        fetch('http://localhost:3000/exercises', configExercise)
        .then(resp => resp.json()) // .json() is converting response to JSON format
        .then(json => {
            const newExercise = new Exercise(json)
            const workoutsList = document.getElementById(`workout-${newExercise.workout_id}`)
            const appendNewExercise = newExercise.renderExercise() // callback
            workoutsList.appendChild(appendNewExercise)
        });

        form.reset();
    };

    // var , let, and const all allow declaration of variables 
    // var is outdated
    // let allows value of variable to be changed
    // const locks the value in so it cannot be changed 

    
}

// hoisting is when variable and function declarations are moved to the top scope level prior to code execution
// aka allows use of variables/functions before they are declared
// i.e. create a function that takes in a variable as argument before that variable is actually created