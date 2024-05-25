export class Task{

    constructor(id, user_id, name, description, due_date, difficulty, collaborators, complete){
        this.id = id;
        this.user_id = user_id;
        this.name = name;
        this.description = description;
        this.due_date = new Date(due_date);
        this.difficulty = difficulty;
        this.collaborators = collaborators;
        this.complete = complete;
        this.calculate_priority();
    }

    calculate_priority(){
        const now = new Date();
        const timeRemaining = this.due_date - now;
        const daysRemaining = Math.ceil(timeRemaining / (1000 * 60 * 60 * 24));

        // Higher difficulty and sooner due date result in a higher priority
        this.priority = this.difficulty * 1000 - daysRemaining;
    }

    update_due_date(new_date){
        this.due_date = new Date(new_date)
        this.calculate_priority();
    }

    update_difficulty(new_difficulty){
        this.difficulty = new_difficulty;
        this.calculate_priority();
    }

    convert_to_json(){
        return {
            'id': this.id,
            'user_id': this.user_id, 
            'name': this.name,
            'description': this.description,
            'due_date': this.due_date,
            'difficulty': this.difficulty,
            'collaborators': this.collaborators,
            'complete': this.complete,
            'priority': this.priority
        }
    }

}


// const tasks = [
//     new Task(1, 'Task 1', 'Description 1', '2024-06-01', 5, [], false),
//     new Task(2, 'Task 2', 'Description 2', '2024-05-30', 3, [], false),
//     new Task(3, 'Task 3', 'Description 3', '2024-05-25', 4, [], false),
//     new Task(4, 'Task 4', 'Description 4', '2024-05-28', 2, [], false)
//   ];

// console.log(tasks[2].convert_to_json());
// tasks[1].update_difficulty(5)
// console.log(tasks[2].convert_to_json());
// console.log(tasks[1].convert_to_json());