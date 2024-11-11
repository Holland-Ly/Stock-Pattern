import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import StockPrice from "./components/StockPrice";
import TimeframeSelector from "./components/TimeframeSelector";
import CandleChart from "./components/CandleChart";
import VolumeChart from "./components/VolumeChart";
import RangeSelector from "./components/RangeSelector";
import { fetchStockData } from "./services/stockService";
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {
  const [symbol, setSymbol] = useState("AAPL");
  const [name, setName] = useState("Apple Inc.");
  const [currentPrice, setCurrentPrice] = useState(0);
  const [interval, setInterval] = useState("1d");
  const [range, setRange] = useState("max");
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [zoom, setZoom] = useState([0, 100]);
  const [previousClose, setPreviousClose] = useState(0);
  const handleZoom = (params) => {
    const { start, end } = params.batch[0];
    setZoom([start, end]);
  };

  useEffect(() => {
    if (symbol) {
      const loadData = async () => {
        setLoading(true);

        try {
          const data = await fetchStockData(symbol, interval, range);
          setName(data.name);
          setCurrentPrice(data.currentPrice);
          setPreviousClose(data.previousClose);
          setStockData(data);
        } catch (error) {
          console.error("Error loading stock data:", error);
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      loadData();
    }
  }, [symbol, interval, range]);

  return (
    <Container>
      <h1 className="my-4">Stock Market Tracker</h1>
      <SearchBar onSearch={setSymbol} />

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error loading data: {error.message}</div>
      ) : (
        stockData && (
          <>
            <StockPrice
              name={name}
              currentPrice={currentPrice}
              previousClose={previousClose}
            />
            <TimeframeSelector
              selectedInterval={interval}
              onIntervalChange={setInterval}
            />
            <CandleChart data={stockData} zoom={zoom} onZoom={handleZoom} />
            <VolumeChart data={stockData} zoom={zoom} onZoom={handleZoom} />
          </>
        )
      )}
    </Container>
  );
}

export default Main;
