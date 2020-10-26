import axios from 'axios';

const baseURL = 'http://localhost:3000'
const baseURLv1 = `${baseURL}/v1`;

export default {
  getPopularBoilr() {
    return axios.get(`${baseURLv1}/popular`);
  },

  getConfig(boilrTitle) {
    return axios.post(`${baseURLv1}/config`, {boilr: boilrTitle});
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
  baseURLv1
};
