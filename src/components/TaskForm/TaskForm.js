import { useState } from "react"
import { Container, Form, Button } from "react-bootstrap" 

const TaskForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("")
  const [enteredDesc, setEnteredDesc] = useState("")
  const [enteredPriority, setEnteredPriority] = useState(0)

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const descChangeHandler = (event) => {
    setEnteredDesc(event.target.value)
  }

  const priorityChangeHandler = (event) => {
    setEnteredPriority(parseInt(event.target.value))
  }

  const submitHandler = (event) => {
    event.preventDefault()
    
    const newTask = {
      id: new Date().getTime(),
      title: enteredTitle,
      desc: enteredDesc,
      priority: enteredPriority,
      status: 0
    }

    props.addTasks(newTask)
    props.show(false)
    
    // reset form
    setEnteredTitle("")
    setEnteredDesc("")
    setEnteredPriority(0)
    
  }

  return (
    <Container className="py-5 px-5" style={{ width: "80%" }}>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={enteredTitle}
            onChange={titleChangeHandler}
            name="title"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter description"
            value={enteredDesc}
            onChange={descChangeHandler}
            name="desc"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Priority</Form.Label>
          <Form.Control 
            type="number" 
            name="priority"
            value={enteredPriority}
            onChange={priorityChangeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Button variant="success" type="submit">
            Create New
          </Button>
          <Button
            variant="success"
            type="button" 
            className="mx-2"
            onClick={() => props.show(false)}
          >
            Cancel
          </Button>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default TaskForm