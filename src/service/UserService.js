import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8081/api/charity/user';

class UserService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }

    getUser(id) {
        return axios.get(USER_API_BASE_URL, id);
    }

    postUser(username) {
        return axios.post(""+USER_API_BASE_URL + '/' + username);
    } 

    editUser(id) {
        return axios.put(""+USER_API_BASE_URL, username);
    } 

}

export default new UserService();

