import axios from 'axios';
import configObj from '../config';

var ajax, axiosRequest, userToken, activeUser = null;

const axiosInit = () => {
    axiosRequest = {
        baseURL: configObj.apiUrl,
        timeout: 1000,
        headers: {'Product': configObj.product}
    };
    userToken = localStorage.getItem('reactToken');
    if (userToken){
        axiosRequest.headers.Authorization = `Bearer ${userToken}`;
    }
    ajax = axios.create(axiosRequest);
}

axiosInit();

function login(email, password, callback, callbackFail){
    const body = {
        email,
        password,
        panel_id: configObj.panel_id,
        stayLogged: 0
    }
    ajax.post(`/login`, body)
        .then((response) => {
                activeUser = response.data.data;
            localStorage.setItem('reactToken', response.data.data.token);
            callback(response.data.data)

        })
        .catch((error) => {
                callbackFail(error.response.data);
        });
}

function validToken(callback){
    return new Promise((resolve, reject) => {
        const body = {
            panel_id: configObj.panel_id
        }
        const request = ajax.post(`/validToken`, body)
            .then((response) => {
                resolve(response.data.data);
                callback();
            })
            .catch((response) => {
                clearToken();
                reject(response);
                callback();
            });
            return request;
    });
}

function getUserToken(){
    return userToken;
}
function clearToken(){
    localStorage.removeItem('reactToken');
    activeUser = null;
    axiosInit();
}


function logout(callback) {
    ajax.post(`/logout`)
        .then((response) => {
            clearToken()
            callback();
        });
}
function getActiveUser(callback){
    // selectBook es un Action Creator. Necesita devolver una action. Un objeto con una propiedad type
    // Action: un objeto con un tipo y un payload
    var payload;
    if (activeUser){
        payload = activeUser;
        callback();
    }
    else{
        if (getUserToken()){
            payload = validToken(callback);
        }
        else{
            payload = false;
            callback();
        }
    }
    return payload;
}

export default {
    getActiveUser,
    login,
    logout,
    getUserToken,
    validToken,
}