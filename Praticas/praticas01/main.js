import { addTask, getTasks, removeTask, updateTask } from "./praticas01"

const tarefas = getTasks();

tarefas. forEach(element =>) {
   const {id, name, completed} = element;

   console.log(id, name, completed);



})

addTask("estudar react")

removeTask(2)

updateTask(1,(name:"estudar react", completed:true))