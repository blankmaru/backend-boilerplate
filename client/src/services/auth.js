import axios from 'axios';

const url = 'https://warm-wave-04665.herokuapp.com/'; // update when prod https://warm-wave-04665.herokuapp.com/ http://localhost:5000/api/user/

class Auth {
    register(name, email, password) {
        return axios.post(url + 'register', {
            name,
            email,
            password
        }); 
    };

    login(email, password) {
        return axios.post(url + 'login', {
            email,
            password
        }).then(res => {
            if (res.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(res.data));
            };
            return res.data;
        })
    };

    logOut() {
        localStorage.removeItem('user');
    };

    currentUser() {
        return JSON.parse(localStorage.getItem('user'));
    };

    authHeader() {
        return JSON.parse(localStorage.getItem('user')).accessToken;
    }
};

export default new Auth();