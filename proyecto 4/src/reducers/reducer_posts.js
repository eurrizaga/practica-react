import { FETCH_POSTS } from '../actions'; //no se especifica porque es index.js
import _ from 'lodash';
export default function(state = null, action){
    switch (action.type) {
        case FETCH_POSTS: 
            console.log(action.payload.data);
            return _.mapKeys(action.payload.data, 'id');
        break;
        default: return state;
    }
}