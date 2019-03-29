import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true
    })
  }

  getAuctions() {
    return this.api.get('/api/auctions')
      .then(({ data }) => data);
  }

  getProfile() {
    return this.api.get('/api/user/me')
      .then(({ data }) => data);
  }
  
  getMyAuctions() {
    return this.api.get('/api/auctions/me')
      .then(({ data }) => data);
  }

}

const apiService = new ApiService();

export default apiService;
