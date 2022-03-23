class WorkoutsAdapter {

    constructor() {
        this.baseUrl = "http://localhost:3000/workouts"
    }

    getWorkouts() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    createWorkout(name, date) {
        const workoutData ={
            name: name,
            date: date
        }

        return fetch(this.baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(workoutData)
        }).then(res => res.json())
    }


    deleteWorkout(workoutId) {
        const workoutDelete = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }
        return fetch(`${this.baseUrl}/${workoutId}`, workoutDelete).then(res => res.json())
    }

    
}