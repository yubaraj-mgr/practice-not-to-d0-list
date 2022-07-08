import React from "react";
import { Button, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import "../App.css";

let initialFormDataObject = {
  taskName: "",
  hour: "",
  type: "",
};

const FormComponent = ({ getFormData }) => {
  const [formDataObject, setFormDataObject] = useState(initialFormDataObject);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormDataObject({ ...formDataObject, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    getFormData(formDataObject);
  };

  return (
    <Form className="text-center mt-5" onSubmit={handleOnSubmit}>
      <Row>
        <Col md="6">
          <Form.Control
            placeholder="Task Name"
            onChange={handleOnChange}
            name="taskName"
          />
        </Col>
        <Col>
          <Form.Control
            placeholder="Hours"
            onChange={handleOnChange}
            name="hour"
          />
        </Col>
        <Col>
          <Button type="submit">Submit</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormComponent;
