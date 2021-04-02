import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8081/api/charity';

class UserService {

//charity profile
    getCharity() {
        return axios.get(USER_API_BASE_URL);
    }

//charity signup
    addCharity(charity) {
        return axios.post(USER_API_BASE_URL, charity);
    }

//charityLogin
    getCharity(charity) {
        return axios.get("http://localhost:8081/api/charity/1");
    }

//charity update
    editCharity(charity) {
        return axios.put("http://localhost:8081/api/charity/profile/2", charity);
    } 

//charity delete
    deleteCharity(id) {
        return axios.delete(USER_API_BASE_URL, id)
    }

}

export default new UserService();

