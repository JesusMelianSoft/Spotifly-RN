const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
  params: {key: '484129036', locale: 'en-US'},
  headers: {
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
    'X-RapidAPI-Key': 'bb2ba3ff71msh3d5a92c612504aap19fd7fjsn1845dfb55222'
  }
};

const aGetPlayList = () => {
    return axios.request(options).then((response) => response.data.tracks)
}

export default {aGetPlayList};