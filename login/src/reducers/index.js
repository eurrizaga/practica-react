import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginReducers from './login_reducers';
import ActiveUserReducers from './active_user_reducer';


function loading(state = null, action){
    switch (action.type){
        case 'LOADING': 
            if (action){
                return action.payload
            }
            break;
        default:
            return state;
            
    }
}

const rootReducer = combineReducers({
  form: formReducer,
  login: LoginReducers,
  activeUser: ActiveUserReducers,
  loading: loading
});

export default rootReducer;