import { Card, Container, Col } from "react-bootstrap";

import CardHeader from "../Card/CardHeader";
import CardElement from "../Card/CardElement";
 
const TaskList = (props) => {
  const actions = [
    "TO DO",
    "ON PROGRESS",
    "DONE"
  ]
  return (
    <Col style={{ minWidth: "440px" }} className="mb-2">
      <Container className="">
        <Card bg="dark" className="text-white">
          <CardHeader text={props.status} /> 
          {props.data
            .filter((todo) => {
              return todo.status === actions.indexOf(props.status);
            })
            .map((todo) => {
              return (
                <CardElement
                  key={todo.id}
                  {...todo}
                  {...props}
                />
              );
            })}
        </Card>
      </Container>
    </Col>
  );
};

export default TaskList;
