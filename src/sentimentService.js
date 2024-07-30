import axios from 'axios';

const endpoint = process.env.REACT_APP_AZURE_COGNATIVE_SERVICES_ENDPOINT;
const apiKey = process.env.REACT_APP_AZURE_API_KEY;

const analyzeSentiment = async (textInput) => {
  const url = `${endpoint}/text/analytics/v3.0/sentiment`;

  const documents = {
    documents: [
      { id: '1', language: 'en', text: textInput }
    ]
  };

  try {
    const response = await axios.post(url, documents, {
      headers: {
        'Ocp-Apim-Subscription-Key': apiKey,
        'Content-Type': 'application/json'
      }
    });

    const sentimentData = response.data.documents[0];
    return {
      sentiment: sentimentData.sentiment,
      confidenceScores: sentimentData.confidenceScores
    };
  } catch (error) {
    console.error('Error analyzing sentiment:', error);
    throw error;
  }
};

export default analyzeSentiment;