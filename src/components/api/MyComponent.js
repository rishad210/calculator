import React, { useState, useEffect } from 'react';
import CalculatorApiService from '../api/CalculatorApiService ';

function MyComponent() {
  const [response, setResponse] = useState('');
  const [responseCat, setResponseCat] = useState('');

  useEffect(() => {
    const apiService = new CalculatorApiService();

    apiService.getOutput({ /* details object */ })
      .then(response => {
        // Set the response in the component's state
        setResponse(response);
      })
      .catch(error => {
        console.error('Error fetching output:', error);
      });

      apiService.getCategories ({ /* details object */ })
      .then(responseCat => {
        // Set the response in the component's state
        setResponseCat(responseCat);
      })
      .catch(error => {
        console.error('Error fetching output:', error);
      });

  }, []);
console.log("fff"+response);
  return (
    <div>
      <h1>{response + "g"}</h1>
      <h1>{responseCat}</h1>
      <h2>e</h2>
    </div>
  );
}

export default MyComponent;
