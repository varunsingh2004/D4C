import axios from 'axios';

const apiKey = 'bM1WsHq26yEqhF0zsmDSXDyxG2gfwFsm';

export const fetchStockData = async (stockSymbol) => {
  try {
    const response = await axios.get(`https://financialmodelingprep.com/api/v3/profile/${stockSymbol}?apikey=${apiKey}`);
    return response.data[0];
  } catch (error) {
    console.error('Error fetching stock data', error);
    throw error;
  }
};

