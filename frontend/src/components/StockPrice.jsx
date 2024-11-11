import React from "react";
import { Card } from "react-bootstrap";

const StockPrice = ({ name, currentPrice, previousClose }) => {
  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div className="d-flex justify-content-between">
          <h2>${currentPrice.toFixed(2)}</h2>
          <span
            className={`h4 ${
              currentPrice >= previousClose ? "text-success" : "text-danger"
            }`}
          >
            {currentPrice >= previousClose ? "+" : ""}
            {(((currentPrice - previousClose) / previousClose) * 100).toFixed(
              2
            )}
            %
          </span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StockPrice;
