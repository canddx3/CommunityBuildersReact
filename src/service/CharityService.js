import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8081/api/charity';

class CharityService {

//All charities
    getCharity() {
        return axios.get(USER_API_BASE_URL);
    }

//charity signup
    createCharity(charity) {
        return axios.post(USER_API_BASE_URL, charity);
    }

//charityLogin/profile/update
    getCharityById(charityId) {
        return axios.get(USER_API_BASE_URL + '/login/' + charityId);
    }

//charity update
    updateCharity(charityUser, charityId) {
        return axios.put(USER_API_BASE_URL + '/profile/' + charityId, charityUser);
    } 

//charity delete
    deleteCharity(charityId) {
        return axios.delete(USER_API_BASE_URL + '/delete/' + charityId)
    }

}

export default new CharityService();

