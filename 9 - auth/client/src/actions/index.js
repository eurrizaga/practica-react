import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';
export const signup = (formProps, callback) => 
    // porque conectamos redux-thunk al middleware, podemos devolver una función al reducer en vez de un action tradicional, la cual automáticamente lleva el parámetro dispatch
    //redux thunk nos permite tener control total sobr el proceso de dispatch, o sea que podemos llamar al dispatch manualmente en vez de devolver el objeto. Es bastante útil cuando hacemos operaciones asincronas antes de devolver el action.
    async dispatch => {
        try{
            //podemos despachar todas las acciones que queramos desde un único action creator
            const response = await axios.post('http://localhost:3090/signup', formProps);
            dispatch({ type: AUTH_USER, payload: response.data.token });
            localStorage.setItem('token', response.data.token);
            callback();
        }catch(e){
            dispatch({type: AUTH_ERROR, payload: 'Email in use'});
        }
        
    };
export const signout = () => {
    localStorage.removeItem('token');
    return {
        type: AUTH_USER,
        payload: ''
    }
}
export const signin = (formProps, callback) => 
    // igual que el signup
    async dispatch => {
        try{
            //podemos despachar todas las acciones que queramos desde un único action creator
            const response = await axios.post('http://localhost:3090/signin', formProps);
            dispatch({ type: AUTH_USER, payload: response.data.token });
            localStorage.setItem('token', response.data.token);
            callback();
        }catch(e){
            dispatch({type: AUTH_ERROR, payload: 'Invalid login'});
        }
        
    };
