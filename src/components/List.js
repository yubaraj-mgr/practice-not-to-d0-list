import React from "react";
import { Col, Row } from "react-bootstrap";

import GoodListBadList from "./GoodListBadList";

const List = ({ formDataArray }) => {
  return (
    <>
      <Row>
        <Col>
          <GoodListBadList type="entryList" formDataArray={formDataArray} />
        </Col>
        <Col>
          <GoodListBadList type="badList" formDataArray={formDataArray} />
        </Col>
      </Row>
    </>
  );
};

export default List;
