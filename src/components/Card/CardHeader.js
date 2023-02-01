import { Card } from "react-bootstrap";

const CardHeader = (props) => {
  return (
    <Card.Body style={{fontWeight: "bold"}}>
      {props.text} 
    </Card.Body>
  );
};

export default CardHeader;
