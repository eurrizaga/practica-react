import { FETCH_POSTS } from '../actions'; //no se especifica porque es index.js
import _ from 'lodash';
export default function(state = {}, action){
    switch (action.type) {
        case FETCH_POSTS: 
            return _.mapKeys(action.payload.data, 'id');
        break;
        case FETCH_POST: 
            return _.mapKeys(action.payload.data, 'id');
        break;
        default: return state;
    }
}