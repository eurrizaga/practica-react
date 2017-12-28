import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginReducers from './login_reducers';
import ActiveUserReducers from './active_user_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  login: LoginReducers,
  activeUser: ActiveUserReducers
});

export default rootReducer;