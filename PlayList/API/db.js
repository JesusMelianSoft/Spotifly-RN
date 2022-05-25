const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
  params: {key: '484129036', locale: 'en-US'},
  headers: {
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
    'X-RapidAPI-Key': '80002b82edmsh39c97f6ce31fd65p13db9ajsn030511675541'
  }
};

const aGetPlayList = () => {
    return axios.request(options).then((response) => response.data.tracks)
}

export default {aGetPlayList};