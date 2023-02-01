import { useState } from "react";
import { Card, Container, Col } from "react-bootstrap";

import TaskForm from "./TaskForm"
import TaskCreateButton from "./TaskCreateButton"

const Tasks = (props) => {
  const [showForm, setShowForm] = useState(false);
  
  return (
    <Col style={{ minWidth: "400px" }}>
      <Container className="my-3 justify-content-center">
        <Card bg="dark" className="text-white">
          { !showForm && <TaskCreateButton show={setShowForm} /> }
          { showForm && <TaskForm addTasks={props.addTasks} show={setShowForm} />}
        </Card>
      </Container>
    </Col>
  );
};

export default Tasks
