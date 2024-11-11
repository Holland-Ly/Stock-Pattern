import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBar = ({ onSearch }) => {
  const [symbol, setSymbol] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(symbol);
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex my-3">
      <Form.Control
        type="text"
        placeholder="Enter stock symbol (e.g., AAPL)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value.toUpperCase())}
      />
      <Button type="submit" variant="primary" className="ms-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
