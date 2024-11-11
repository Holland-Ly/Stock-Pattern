// src/components/RangeSelector.jsx
import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const RangeSelector = ({ selectedRange, onRangeChange }) => {
  const ranges = [
    { label: "1D", value: "1d" },
    { label: "5D", value: "5d" },
    { label: "1M", value: "1mo" },
    { label: "3M", value: "3mo" },
    { label: "6M", value: "6mo" },
    { label: "1Y", value: "1y" },
    { label: "5Y", value: "5y" },
    { label: "Max", value: "max" },
  ];

  return (
    <ButtonGroup className="my-3">
      {ranges.map(({ label, value }) => (
        <Button
          key={value}
          variant={selectedRange === value ? "primary" : "outline-primary"}
          onClick={() => onRangeChange(value)}
        >
          {label}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default RangeSelector;
