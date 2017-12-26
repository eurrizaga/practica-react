import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions'; //no se especifica porque es index.js
import _ from 'lodash';
export default function(state = {}, action){
    switch (action.type) {
        case FETCH_POSTS: 
            return _.mapKeys(action.payload.data, 'id');
        break;
        case FETCH_POST:
            //ES 5
            // const post = action.payload.data; 
            // const newState = { ... state };
            // newState[post.id] = post;
            // return newState;
            //ES 6
            return { ...state, [action.payload.data.id]: action.payload.data }
        break;
        case DELETE_POST: // actualizar el state para quitar el elemento que eliminamos
            //omit: toma un arreglo y le quita el elemento que tiene el inidice que es el segundo parámetro
            return _.omit(state, action.payload);
        break;
        default: return state;
    }
}