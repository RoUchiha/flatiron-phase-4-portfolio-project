class Exercise {

    static all = []

    constructor({id, name, category, sets, distance, workout_id}) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.sets = sets;
        this.distance = distance;
        this.workout_id = workout_id;

        Exercise.all.push(this);
    }

    renderExercise = () => {
        const exerciseDesc = document.createElement('div');
        exerciseDesc.classList.add("exercise-info")

        const exerciseName = document.createElement('li');
        exerciseName.innerHTML = this.name.charAt(0).toUpperCase() + this.name.slice(1);
        exerciseName.classList.add("ex-name");

        const exerciseCategory = document.createElement('li');
        exerciseCategory.innerHTML = this.category;
        exerciseCategory.classList.add("ex-data");

        const exerciseSets = document.createElement('li');
        exerciseSets.innerHTML = this.sets + " sets";
        exerciseSets.classList.add("ex-data");

        const exerciseDistance = document.createElement('li');
        exerciseDistance.innerHTML = this.distance + " miles";
        exerciseDistance.classList.add("ex-data");



        exerciseDesc.appendChild(exerciseName);

        if (this.category != "" ) {
        exerciseDesc.appendChild(exerciseCategory);
        }

        if (this.sets != null ) {
        exerciseDesc.appendChild(exerciseSets);
        }

        if (this.distance != null ) {
        exerciseDesc.appendChild(exerciseDistance);
        }


        const deleteExercise = document.createElement('button');
        deleteExercise.innerHTML = '&#x2612;';
        deleteExercise.id = this.id;
        deleteExercise.title = "Remove Exercise";
        deleteExercise.classList.add("delete-button");
        exerciseDesc.appendChild(deleteExercise)


        

        deleteExercise.addEventListener('click', function (e) {
            e.preventDefault();
            console.log(e.target.id, "event target")
            const configEx = {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }
            };

            fetch(`http://localhost:3000/exercises/${this.id}`, configEx)
            .then(resp => resp.json())
            .then(json => alert(json.message));

            exerciseDesc.remove();
        });


        
        const completeExercise = document.createElement('button');
        completeExercise.innerHTML = '&#x2705;';
        completeExercise.title = "Click to mark exercise as complete";
        completeExercise.classList.add("complete-button");
        exerciseDesc.appendChild(completeExercise);



        return exerciseDesc;
    };





};