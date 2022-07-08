import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import FormComponent from "./components/FormComponent";
import List from "./components/List";

const App = () => {
  const [formDataArray, setFormDataArray] = useState([]);
  const getFormData = (data) => {
    setFormDataArray([...formDataArray, data]);
  };

  return (
    <>
      <Container>
        <FormComponent getFormData={getFormData} />
        <List formDataArray={formDataArray} />
      </Container>
    </>
  );
};

export default App;
