import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8081/api/charity/events';

class EventService {

    fetchEvents() {
        return axios.get(USER_API_BASE_URL);
    }

    addEvents(events) {
        return axios.post(""+USER_API_BASE_URL, events);
    }

    // fetchUsername(username) {
    //     return axios.get(USER_API_BASE_URL + '/' + username);
    // } 

    // deleteUser(eventsId) {
    //     return axios.delete(USER_API_BASE_URL + '/' + eventsId);
    // }
    // editUser(events) {
    //     return axios.put(USER_API_BASE_URL + '/' + events.id, events);
    // } 

}

export default new EventService();

