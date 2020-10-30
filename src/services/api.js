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

  createAndDownloadAngularProject(options) {
    return axios.post(
      `${baseURLv1}/angular/createdownload`,
      { options },
      { responseType: 'arraybuffer' }
    );
  },

  createAndUploadAngularProject(options) {
    return axios.post(`${baseURLv1}/angular/createupload`, {
      options,
      secret: localStorage.getItem('secret'),
    });
  },

  baseURL,
  baseURLv1,
};
