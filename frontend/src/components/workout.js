class Workout {

    constructor({name, date, exercises, id}) {
        this.name = name;
        this.date = date;
        this.exercises = exercises;
        this.id = id;
    };

    // constructor function is used to create objects
    // works like 'initialize' ?
    // assigns values to properties of the new object

    // class methods/functions are created just like normal
    // same syntax

    //this = instance of Workout class object 

    renderWorkout() {
        const workoutAll = document.getElementById("workouts-container");
        workoutAll.classList.add("workout");

        const workoutName = document.createElement("h2");
        workoutName.innerHTML = this.name + "'s workout";
        workoutName.name = this.name;
        workoutName.classList.add(`workout-data`);

        workoutName.id = `workout-${this.id}`;

        workoutAll.appendChild(workoutName);

        const exerciseList = this.renderExercises(); //asynchronous (callback)
        workoutName.appendChild(exerciseList);
    };



    renderExercises() {
        const exercises = this.exercises;
        const list = document.createElement("ul");

        exercises.forEach(exercise => { // forEach used to iterate over each object in collection
            const newExercise = new Exercise(exercise); // callback

            console.log(exercise, "exercise");

            const nameList = newExercise.renderExercise();

            list.appendChild(nameList);
        });
        return list;
    };


}