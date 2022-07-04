import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import FormComponent from "./components/FormComponent";
import { List } from "./components/List";

export const App = () => {
  const [dataArray, setDataArray] = useState([]);
  const getFormData = (formData) => {
    setDataArray([...dataArray, formData]);
  };

  // Previous value is 0 or we define our self and current value each object
  const total = dataArray.reduce(
    (previousValue, currentValue) => previousValue + +currentValue.hour,
    0
  );

  const switchData = (id, type) => {
    // Find logic here
    // The main logic for if else statement is change the type of cliked item;
    // Change the type of clicked object
    // which one, the clicked one from origional Array, so that it re-renders again
    const finalData = dataArray.map((item) => {
      if (item.id == id) {
        item.type = type;
      }
      return item;
    });
    setDataArray(finalData);
  };

  const handleOnCheck = (e) => {
    const { checked, value, name } = e.target;
    console.log(
      "checked = " + checked + "\n",
      "value = " + value + "\n",
      "name = " + name
    );
  };

  return (
    <>
      <Container>
        <h1 className="text-center mt-4">Weekly Hours Management</h1>
        <hr />
        <FormComponent getFormData={getFormData} />
        <hr />
        <List
          dataArray={dataArray}
          switchData={switchData}
          total={total}
          handleOnCheck={handleOnCheck}
        />
        <hr />
      </Container>
    </>
  );
};

export default App;
