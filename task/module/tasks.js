import { Task } from "./task";

export class Tasks{

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

    //
    update_date(id, new_date){

    }

    update_difficulty(id, new_difficulty){

    }
}