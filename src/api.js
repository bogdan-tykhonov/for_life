import axios from 'axios';

const localApi = axios.create({
  baseURL: 'app/',
  proxy: {
    protocol: 'http',
    host: 'localhost',
    port: 8888
  }
});

const datoCms = axios.create({
  baseURL: 'https://graphql.datocms.com/',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer 46c2bc454bc73894555f03065814b8'
  }
});

export default {
  async sendMail (data) {
    return await localApi.post('/mail.php', data);
  },
  
  async getDocuments () {
    const query = JSON.stringify({
      query: `{
        allDocuments {
          documentImage{
            url
          }
        }
      }`
    });
  
    return await datoCms.post('/', query);
  }
};

