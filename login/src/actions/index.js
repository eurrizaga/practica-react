import axios from 'axios';

const ROOT_URL = 'http://aws2.smartadtags.com:13000';
var ajax, axiosRequest, userToken, activeUser = null;

const axiosInit = () => {
    axiosRequest = {
      baseURL: ROOT_URL,
      timeout: 1000,
      headers: {'Product': 'beflick_movies'}
    };
    userToken = localStorage.getItem('reactToken');
    if (userToken){
        axiosRequest.headers.Authorization = `Bearer ${userToken}`;
    }
    ajax = axios.create(axiosRequest);
}

axiosInit();

export const LOGIN_ACTION = 'LOGIN_ACTION';

export function login(email, password, callback, callbackFail){
    const body = {
        email,
        password,
        panel_id: 2,
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
    return {
        type: LOGIN_ACTION,
        payload: null
    }
    
}

export function validToken(callback){
    const body = {
        panel_id: 2
    }
    const request = ajax.post(`/validToken`, body)
        //.then((response)=>{ return response.data });
    return request;
            
}
export function setActiveUser(payload){
    return {
        type:'SELECTED_USER',
        payload
    };
}
export function getActiveUser(callback){
    // selectBook es un Action Creator. Necesita devolver una action. Un objeto con una propiedad type
    // Action: un objeto con un tipo y un payload
    var payload;
    if (activeUser){
        payload = activeUser;
    }
    else{
        if (userToken){
            payload = validToken();
        }
        else{
            payload = false;
        }
    }

    return {
        type:'SELECTED_USER',
        payload
    };

}
export function logout(callback){
    ajax.post(`/logout`)
        .then((response) => {
            localStorage.removeItem('reactToken');
            activeUser = null;
            axiosInit();
            callback();
        });
    
    return {
        type:'SELECTED_USER',
        payload: null
    };
}
