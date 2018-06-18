import { CHANGE_AUTH } from '../actions/types';
export default function(state = false, action){
    switch(action.type){
        case CHANGE_AUTH: return action.payload;
    }
    return state;
}
//actualiza el estado d ela aplicacion con el nuevo valor de payload