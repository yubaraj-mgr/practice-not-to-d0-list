import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

const GoodListBadList = ({ type, dataArray, switchData, handleOnCheck }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>
            <Form.Check type="checkbox" onChange={handleOnCheck} />
          </th>
          <th>Task Name</th>
          <th>Hours</th>
          <th>Move</th>
        </tr>
      </thead>
      <tbody>
        {type === "good"
          ? dataArray.map((item, i) => {
              return (
                <>
                  <tr>
                    <td>
                      <Form.Check type="checkbox" onChange={handleOnCheck} />
                    </td>
                    <td>{item.taskName}</td>
                    <td>{item.hour}</td>
                    <td>
                      <Button
                        variant="warning"
                        onClick={() => switchData(item.id, "bad")}
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </Button>
                    </td>
                  </tr>
                </>
              );
            })
          : dataArray.map((item, i) => {
              return (
                <>
                  <tr>
                    <td>
                      <Form.Check type="checkbox" onChange={handleOnCheck} />
                    </td>
                    <td>{item.taskName}</td>
                    <td>{item.hour}</td>
                    <td>
                      <Button
                        variant="warning"
                        onClick={() => switchData(item.id, "good")}
                      >
                        <i className="fa-solid fa-arrow-left"></i>
                      </Button>
                    </td>
                  </tr>
                </>
              );
            })}
      </tbody>
    </Table>
  );
};

export default GoodListBadList;
