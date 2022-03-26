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

        const exerciseName = document.createElement('h4');
        exerciseName.innerHTML = this.name.charAt(0).toUpperCase() + this.name.slice(1);

        const exerciseCategory = document.createElement('p');
        exerciseCategory.innerHTML = this.category;

        const exerciseSets = document.createElement('p');
        exerciseSets.innerHTML = this.sets;

        const exerciseDistance = document.createElement('p');
        exerciseDistance.innerHTML = this.distance;

        exerciseDesc.appendChild(exerciseName);
        exerciseDesc.appendChild(exerciseCategory);
        exerciseDesc.appendChild(exerciseSets);
        exerciseDesc.appendChild(exerciseDistance);

        const deleteExercise = document.createElement('button');
        deleteExercise.innerText = "Remove Exercise";
        deleteExercise.id = this.id;
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
        completeExercise.innerHTML = "Done";



        return exerciseDesc;
    };





};