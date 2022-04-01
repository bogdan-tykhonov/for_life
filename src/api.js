import axios from 'axios';

const api = axios.create({
  baseURL: 'app/',
  proxy: {
    protocol: 'http',
    host: 'localhost',
    port: 8888
  }
});

const sendMail = async (data) => {
  return await api.post('/mail.php', data);
};

export {
  sendMail
};
