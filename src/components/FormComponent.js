import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FormComponent = ({ getFormData }) => {
  const initial = {
    taskName: "",
    hour: "",
    type: "good",
  };
  const [formVal, setFormVal] = useState(initial);
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    // Stil confuse how this work.
    setFormVal({ ...formVal, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    getFormData({ ...formVal, id: uuidv4() });
  };
  return (
    <Form className="mt-5 text-center" onSubmit={handleOnSubmit}>
      <Row>
        <Col md="7">
          <Form.Control
            name="taskName"
            onChange={handleOnChange}
            required
            name="taskName"
            placeholder="First name"
          />
        </Col>
        <Col>
          <Form.Control
            name="hour"
            onChange={handleOnChange}
            type="number"
            required
            name="hour"
            placeholder="Hours"
          />
        </Col>
        <Col>
          <Button type="submit" variant="primary">
            Add Task
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormComponent;
