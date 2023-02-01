import { Button } from "react-bootstrap"

const TaskCreateButton = (props) => {
  return (
    <Button
      className="btn btn-dark"
      style={{ fontWeight: "bold" }}
      onClick={() => props.show(true)}
    >
      CREATE NEW TASK
    </Button>
  );
};

export default TaskCreateButton