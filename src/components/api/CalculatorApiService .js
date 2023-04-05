import axios from 'axios';

class CalculatorApiService {
  constructor() {
    this.baseUrl = 'http://localhost:8980/prod';
  }

  getCategories() {
    return axios.get(`${this.baseUrl}/category`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching categories:', error);
        throw error;
      });
  }

  getSubCategories(subcat) {
    return axios.get(`${this.baseUrl}/subcategory/${subcat}`)
      .then(response => response.data)
      .catch(error => {
        console.error(`Error fetching subcategories for ${subcat}:`, error);
        throw error;
      });
  }

  getOutput(details) {
    return axios.post(`${this.baseUrl}/profit`, details)
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching output:', error);
        throw error;
      });
  }
}

export default CalculatorApiService;
