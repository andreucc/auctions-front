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

  createAuction(body){
    return this.api.post('/api/auction/create', body)
    .then(({data})=> data);
  }

  updateProfile(id, body) {
    return this.api.put(`/api/user/${id}/edit`, body)
    .then(({ data }) => data); 
  }
  
  getMyAuctions() {
    return this.api.get('/api/auctions/me')
      .then(({ data }) => data);
  }

  getMyFinishedAuctions() {
    return this.api.get('/api/auctions/me/finished')
      .then(({ data }) => data);
  }

  getMyBidAuctions () {
    return this.api.get('/api/auctions/me/bind')
    .then(({ data }) => data);
  }

  createBid (body) {
    return this.api.post('/api/bid/create', body)
    .then(({ data }) => data)
  }

  getAuctionDetail(id) {
    return this.api.get(`/api/auction/${id}`)
      .then(({ data }) => data.data)
  }

  deleteAuction(id) {
    return this.api.delete(`/api/auction/${id}`)
    .then(({ data }) => data.data)
  }

  checkAuction() {
    return this.api.get('/api/maintenance')
    .then(({data})=> data)
  }
}

const apiService = new ApiService();

export default apiService;
