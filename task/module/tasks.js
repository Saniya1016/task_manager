import { Task } from "./task.js";

class Tasks{

    constructor(){
        this.table = [];
    }
    
    add_task(id, user_id, name, description, due_date, difficulty, collaborators, complete){
        let t = new Task(id, user_id, name, description, due_date, difficulty, collaborators, complete);
        let obj = t.convert_to_json();
        this.table.push(obj);
    }

    //sort when fetching task data
    read_tasks(user_id){
        const user_tasks = this.table.filter((obj) => obj.user_id == user_id);
        return user_tasks.sort((a,b)=> b.priority - a.priority);
    }

    //update the due date for task with id
    update_date(id, user_id, new_date){
        const i = this.table.findIndex((obj) => obj.user_id == user_id && obj.id == id);
        const task = this.table[i];
        let t = new Task(task.id, task.user_id, task.name, task.description, task.due_date, task.difficulty, task.collaborators, task.complete);
        t.update_due_date(new_date);
        this.table[i] = t.convert_to_json();
    }

    update_difficulty(id, user_id, new_difficulty){
        const i = this.table.findIndex((obj) => obj.user_id == user_id && obj.id == id);
        const task = this.table[i];
        let t = new Task(task.id, task.user_id, task.name, task.description, task.due_date, task.difficulty, task.collaborators, task.complete);
        t.update_difficulty(new_difficulty);
        this.table[i] = t.convert_to_json();
    }

    add_collabrator(id, user_id, collab_id){
        const i = this.table.findIndex((obj) => obj.user_id == user_id && obj.id == id);
        const task = this.table[i];
        task.collaborators.push(collab_id);
    }
}

const tasks = new Tasks();
export default tasks;