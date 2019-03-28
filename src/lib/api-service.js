import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:5000/api',
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
