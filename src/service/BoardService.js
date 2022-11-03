import axios from 'axios'; 

const BOARD_API_BASE_URL = "http://localhost:8080/playdatatalk"; 
const PYTHON_API = "http://localhost:5000";

class BoardService {

    createKeyword(test) {
        console.log(test);
        return axios.post(PYTHON_API + "/make-hashtag", test);
    }

    getBoards() {
        return axios.get(BOARD_API_BASE_URL + "/gohome");
    }

    createPost(test) {
        console.log(test);
        return axios.post(BOARD_API_BASE_URL + "/posting", test);
    }

    getOneBoard(postId) {
        return axios.get(BOARD_API_BASE_URL + "/getting/" + postId);
    }

    updatePost(postId, test) {
        console.log(postId);
        console.log(test);
        return axios.put(BOARD_API_BASE_URL + "/posting/" + postId, test);
    }

    getUser(userId) {
        console.log(userId + "testing")
        return axios.get(BOARD_API_BASE_URL + "/getuserinform/"+userId);
    }

    goProfile(userId) {
        console.log(userId+"goprofile")
        return axios.get(BOARD_API_BASE_URL + "/goprofile/"+userId);
    }

}

export default new BoardService();