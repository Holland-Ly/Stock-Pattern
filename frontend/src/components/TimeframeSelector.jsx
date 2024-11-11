import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const TimeframeSelector = ({ selectedInterval, onIntervalChange }) => {
  const timeframes = [
    { label: "1D", value: "1d" },
    { label: "5D", value: "5d" },
    { label: "1W", value: "1wk" },
    { label: "1MO", value: "1mo" },
    { label: "3MO", value: "3mo" },
  ];
  // Define the maximum interval allowed for each range

  return (
    <ButtonGroup className="my-3">
      {timeframes.map(({ label, value }) => (
        <Button
          key={value}
          variant={selectedInterval === value ? "primary" : "outline-primary"}
          onClick={() => onIntervalChange(value)}
        >
          {label}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default TimeframeSelector;
