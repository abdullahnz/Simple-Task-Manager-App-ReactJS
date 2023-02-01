import { useEffect, useState } from "react";
import { Card, Dropdown, Button, Tab } from "react-bootstrap";
import { TrashFill, GearFill } from 'react-bootstrap-icons';

const CardTitle = ({ title }) => {
  return <Card.Title className="mb-3">{title}</Card.Title>;
};

const CardDescription = ({ desc }) => {
  return <Card.Text className="mb-4">{desc}</Card.Text>;
};

const CardActions = (props) => {
  const [actions, setActions] = useState([
    {status: 0, action: "TO DO"},
    {status: 1, action: "ON PROGRESS"},
    {status: 2, action: "DONE"}
  ])
  
  useEffect(() => {
    setActions((prev) => {
      return prev.filter((obj) => {
        return obj.action !== props.status
      })
    })
  }, [])

  const statusChangeHandler = (event) => {
    const selectedTaskId = parseInt(event.target.getAttribute("task"))
    const selectedStatus = parseInt(event.target.getAttribute("status"))
    
    props.updateTask(selectedTaskId, selectedStatus)
  }

  const deleteHandler = (event) => {
    const selectedTaskId = parseInt(event.target.getAttribute("task"))

    props.deleteTask(selectedTaskId)
  }

  return (
    <div className="d-flex gap-2 mb-2">
      <Dropdown>
        <Dropdown.Toggle variant="success" className="btn-sm">
          <GearFill />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {actions.map((obj, i) => {
            return (
              <Dropdown.Item
                key={i}
                task={props.id}
                status={obj.status}
                onClick={statusChangeHandler}
              >
                {obj.action}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      <Button 
        className="btn btn-danger btn-sm" 
        task={props.id} 
        onClick={deleteHandler}
      >
        <TrashFill />
      </Button>
    </div>
  );
};

const CardElement = (props) => {
  return (
    <Card bg="dark" className="mb-1 mx-1">
      <Card.Body>
        <CardTitle {...props} />
        <CardDescription {...props} />
        <CardActions {...props} />
      </Card.Body>
    </Card>
  );
};

export default CardElement;
