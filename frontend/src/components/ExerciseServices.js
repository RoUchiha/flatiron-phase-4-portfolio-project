class ExerciseServices {

    formSubmit(e){
        e.preventDefault()
        const exerciseName = document.getElementById('new-exercise-name');
        const exerciseCategory = document.getElementById('exercise-category-dropdown');
        const exerciseSets = document.getElementById('new-exercise-sets');
        const exerciseDistance = document.getElementById('new-exercise-distance');
        const exerciseWorkoutId = document.getElementById('workout_id');

        const exerciseValues = {
            name: exerciseName.value,
            category: exerciseCategory,
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

        fetch('http://localhost:3000/exercises', configExercise)
        .then(resp => resp.json())
        .then(json => {
            const newExercise = new Exercise(json)
            const workoutsList = document.getElementById(`workout-${newExercise.workout_id}`)
            const appendNewExercise = newExercise.renderExercise()
            workoutsList.appendChild(appendNewExercise)
        });

        form.reset();
    };


    
}