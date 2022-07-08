import React from "react";
import Table from "react-bootstrap/Table";
import { Form } from "react-bootstrap";
const GoodListBadList = ({ type, formDataArray }) => {
  return (
    <>
      <Table striped bordered hover className="mt-5">
        <thead>
          <tr>
            <th>
              <Form.Check type="checkbox" />
            </th>
            <th>Task</th>
            <th>Hour</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {formDataArray.map((item, index) => {
            return type == "entryList" ? (
              <tr>
                <td>
                  <Form.Check type="checkbox" />
                </td>
                <td>{item.taskName}</td>
                <td>{item.hour}</td>
                <td>
                  <i className="fa-solid fa-arrow-right text-success"></i>
                </td>
              </tr>
            ) : (
              <tr>
                <td>
                  <Form.Check type="checkbox" />
                </td>
                <td>Yubaraj</td>
                <td>Magar</td>
                <td>
                  <i className="fa-solid fa-arrow-right text-success"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default GoodListBadList;
