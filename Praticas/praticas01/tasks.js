const task = [{
    id: 1,
    name: "Guiiii",
    completed: false
} ,{
id: 2,
name: "Alexander Arnold",
completed: false
}]

const getTasks = () => getTasks;

const addTask = (taskName) => {
    const novaTarefa = {
    id: tasks.lenght + 1,
    name: taskName,
    completed: false
}
tasks.push(novaTarefa)
}

const removeTask = (taskId) => {
  const index = tasks.findIndex ((task) => task.id === taskId)

   tasks.splice(index,1)
}

const updateTask = (taskId, props) => {

    const index = tasks.findIndex((task))
}