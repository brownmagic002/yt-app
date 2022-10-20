import axios from "axios";

const KEY = 'AIzaSyDWF8W1tk_bqcRaXukEofbTBHCZNc4CKfg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})