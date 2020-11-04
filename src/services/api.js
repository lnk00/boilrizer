import axios from 'axios';

const baseURL = 'http://localhost:3000';
const baseURLv1 = `${baseURL}/v1`;

export default {
  async getPopularBoilr() {
    let res = await axios.get(`${baseURLv1}/popular`);
    return res.data;
  },

  async getConfig(boilrTitle) {
    let res = await axios.post(`${baseURLv1}/config`, { boilr: boilrTitle });
    return res.data;
  },

  createAndDownload(config) {
    return axios.post(
      `${baseURLv1}/download`,
      { config },
      { responseType: 'arraybuffer' }
    );
  },

  createAndUpload(config) {
    return axios.post(`${baseURLv1}/upload`, {
      config,
      secret: localStorage.getItem('secret'),
    });
  },

  baseURL,
  baseURLv1,
};
