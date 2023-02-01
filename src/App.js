import { Container, Row, Col } from "react-bootstrap"
import TaskList from "./components/TaskList/TaskList"
import Tasks from "./components/TaskForm/Tasks"

import { useState, useEffect } from "react"
import { EXAMPLE_TASK } from "./store/Data"

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.tasks) || [])

  useEffect(() => {
    localStorage.tasks = JSON.stringify(tasks)
  }, [tasks])

  useEffect(() => {
    const loadTasks = JSON.parse(localStorage.tasks)
    setTasks(() => (loadTasks.length > 0 ? loadTasks : EXAMPLE_TASK))
  }, [])

  // gatau kenapa, state ga ke render ulang, pas updateTask :)
  // jadi buat sort sendiri deh di updateTask
  // useEffect(() => { 
  //   setTasks((prev) => {
  //     return prev.sort((a, b) => {
  //       return b.priority - a.priority
  //     })
  //   })
  // }, [tasks])

  const updateTaskStatusHandler = (taskId, status) => {
    const selectedTask = tasks.find((task) => {
      return task.id === taskId
    })

    setTasks((tasks) => {
      const current = tasks.filter((task) => {
        return task.id !== taskId
      })
      
      tasks = [...current, { ...selectedTask, status: status }]

      return tasks.sort((a, b) => {
        return b.priority - a.priority
      })
    })
 
  }

  const saveCurrentTasksHandler = (task) => {
    setTasks((prevTasks) => {
      
      const current = [...prevTasks, task]
      
      return current.sort((a, b) => {
        return b.priority - a.priority
      })
    })
  }

  const deleteTaskHandler = (taskId) => {
    setTasks((tasks) => {
      return tasks.filter((task) => {
        return task.id !== taskId
      })
    })
  }

  return (
    <Container>
      <Tasks addTasks={saveCurrentTasksHandler} />
      <Row>
        <TaskList
          status="TO DO"
          data={tasks}
          deleteTask={deleteTaskHandler}
          updateTask={updateTaskStatusHandler}
        />

        <TaskList
          status="ON PROGRESS"
          data={tasks}
          deleteTask={deleteTaskHandler}
          updateTask={updateTaskStatusHandler}
        />

        <TaskList
          status="DONE"
          data={tasks}
          deleteTask={deleteTaskHandler}
          updateTask={updateTaskStatusHandler}
        />
      </Row>
    </Container>
  )
}

export default App
