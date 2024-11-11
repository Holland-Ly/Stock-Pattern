import axios from "axios";

const API_URL = "/v8/finance/chart/";

export const fetchStockData = async (symbol, interval, range) => {
  const API_URL = "http://localhost:5001/api/stock";
  try {
    console.log(`${API_URL}/${symbol}?interval=${interval}&range=${range}`);
    const response = await axios.get(
      `${API_URL}/${symbol}?interval=${interval}&range=${range}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    throw error;
  }
};
