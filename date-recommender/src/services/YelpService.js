import axios from 'axios'

const corsPrefix = 'https://cors-anywhere.herokuapp.com';
const baseUrl = 'https://api.yelp.com/v3';
const requestHeader = {
    headers: {
        'Authorization': `Bearer ${process.env.VUE_APP_YELP_API_KEY}`
    }
};

export default {
    getEvents(lat, lon) {
        return axios
                .get(`${corsPrefix}/${baseUrl}/businesses/search?limit=10&latitude=${lat}&longitude=${lon}`, requestHeader);
    }
};
