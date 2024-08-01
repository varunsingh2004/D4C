# Sentiment-Driven Market Intelligence Model

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## Project Overview

The Sentiment-Driven Market Intelligence Model is a web application designed to analyze and visualize market sentiments for stocks. It leverages sentiment analysis to assess the sentiment of stock descriptions and provides interactive charts and financial insights for users. The application is built using React and integrates with Azure Cognitive Services for sentiment analysis and Financial Modeling Prep API for stock data.

## Features
***Search for Stocks**: Enter a stock symbol to fetch and display relevant data.\
***Sentiment Analysis**: Analyze and visualize sentiment scores using a donut chart.\
***Financial Overview**: View and compare financial metrics like revenue and net income.

## Installation
Follow these steps to set up the project locally:\
***1. Clone the Repository:***
```bash
git clone https://github.com/varunsingh2004/D4C-Sentiment-Analysis-in-Finance.git
cd D4C-Sentiment-Analysis-in-Finance
```
***2. Install Dependencies:***\
Make sure you have Node.js installed. Then, install the necessary dependencies using npm or yarn.
```bash
npm install
# or
yarn install
```
***3. Set Up Environment Variables:***
Create a .env file in the root directory of the project and add the following variables:
```plaintext
REACT_APP_AZURE_COGNITIVE_SERVICES_ENDPOINT=https://your-endpoint.cognitiveservices.azure.com
REACT_APP_AZURE_API_KEY=your-azure-api-key
REACT_APP_FINMODEL_API_KEY=your-financial-modeling-prep-api-key
```
Replace your-endpoint, your-azure-api-key, and your-financial-modeling-prep-api-key with your actual credentials.\
***4. Run the Application:***
Start the development server:
```bash
npm start
#or
yarn start
```
The application will be available at http://localhost:3000.

## Usage

***1. Search for Stocks:***

*Enter a stock symbol (e.g., AAPL) in the search bar.
*Click "Search" to fetch and display stock data along with sentiment analysis.

***2. View Sentiment Analysis:***

*The donut chart will display the sentiment scores for the searched stock.

***3. Financial Overview:***

Navigate between "Revenue" and "Net Income" tabs to view financial charts and metrics.

## Dependencies

The project uses the following dependencies:

****React:*** A JavaScript library for building user interfaces.

****Bootstrap:*** A CSS framework for styling.

****React-Bootstrap:*** Bootstrap components for React.

****Chart.js:*** A charting library for visualizing data.

****react-chartjs-2:*** React components for Chart.js.

****axios:*** A promise-based HTTP client for making API requests.

****lodash:*** A utility library for JavaScript.

****prop-types:*** Runtime type checking for React props.

To install these dependencies, run:
```bash
npm install react-bootstrap bootstrap chart.js react-chartjs-2 axios lodash prop-types
# or
yarn add react-bootstrap bootstrap chart.js react-chartjs-2 axios lodash prop-types
```

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/YourFeature).
3. Make your changes and commit them (git commit -am 'Add some feature').
4. Push to the branch (git push origin feature/YourFeature).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/varunsingh2004/D4C-Sentiment-Analysis-in-Finance/blob/main/LICENSE) file for details.

## Conact

For any question or feedback, please contact ayush.balyan13@gmail.com.




