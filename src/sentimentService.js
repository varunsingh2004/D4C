import axios from 'axios';

const endpoint = 'https://laguage-service-bobhackathon.cognitiveservices.azure.com/';
const apiKey = '70c1218559594f169098fc377d3f2329';

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