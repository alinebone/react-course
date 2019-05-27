import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: "Client-ID d3b7bb595f463cc818fed33d4abcc35c1be9fc70477975ba29de2c083af45271"
  } 
})