import axios from 'axios';

const ROOT_URL = 'http://aws2.smartadtags.com:13000';
const API_KEY = '?key=ezeu123987';
const ajax = axios.create({
  baseURL: ROOT_URL,
  timeout: 1000,
  headers: {'Product': 'beflick_movies'}
});
export const LOGIN_ACTION = 'LOGIN_ACTION';

export function login(email, password, callback){
	const body = {
		email,
		password,
		panel_id: 2,
		stayLogged: 0
	}
    const request = ajax.post(`/login`, body)
    	.then((response) => callback(response));
    //Custom operations


    //Return action
    return {
        type: LOGIN_ACTION,
        payload: request
    }
}
