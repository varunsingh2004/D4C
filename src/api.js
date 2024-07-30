import axios from 'axios';
const API_KEY = process.env.REACT_APP_FINMODEL_API_KEY;
export const fetchStockData = async (stockSymbol) => {
  try {
    const response = await axios.get(`https://financialmodelingprep.com/api/v3/profile/${stockSymbol}?apikey=${API_KEY}`);
    return response.data[0];
  } catch (error) {
    console.error('Error fetching stock data', error);
    throw error;
  }
};

