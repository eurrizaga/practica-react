import webservice from './WebService';

export const LOGIN_ACTION = 'LOGIN_ACTION';
export function login(email, password, callback, callbackFail){
    webservice.login(email, password, callback, callbackFail);// <-- Retorna una promesa que es resuelta por axios antes de llegar al reducer
    return {
        type: LOGIN_ACTION,
        payload: null
    }
}

export function setActiveUser(payload){
    return {
        type:'SELECTED_USER',
        payload
    };
}
export function getActiveUser(callback){
    return {
        type:'SELECTED_USER',
        payload: webservice.getActiveUser(callback)
    };
}

export function logout(callback){
    webservice.logout(callback);
    return {
        type:'SELECTED_USER',
        payload: null
    };
}
export function setLoading(payload){
    return {
        type: 'LOADING',
        payload
    }
}
