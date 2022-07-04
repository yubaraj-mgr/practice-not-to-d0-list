import React from "react";
import GoodListBadList from "./GoodListBadList";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export const List = ({ dataArray, switchData, total, handleOnCheck }) => {
  const goodList = dataArray.filter(({ type }) => type === "good");
  const badList = dataArray.filter(({ type }) => type === "bad");
  const badListTotal = badList.reduce(
    (preveiousValue, CurrentValue) => preveiousValue + +CurrentValue.hour,
    0
  );

  return (
    <>
      <Row className="mt-5">
        <Col>
          <GoodListBadList
            dataArray={goodList}
            type="good"
            switchData={switchData}
            total={total}
            handleOnCheck={handleOnCheck}
          />
          <h4 className="text-center mt-4">
            Total Weekly hours allocated = {total} hours
          </h4>
        </Col>
        <Col>
          <GoodListBadList
            dataArray={badList}
            switchData={switchData}
            handleOnCheck={handleOnCheck}
          />
          <h4 className="text-center mt-4">
            You could have saved = {badListTotal} hours
          </h4>
        </Col>
      </Row>
    </>
  );
};
