import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true
    })
  }

  
  getAuctions() {
    return this.api.get('/auctions')
      .then(({ data }) => data);
  }

 
}

const apiService = new ApiService();

export default apiService;
