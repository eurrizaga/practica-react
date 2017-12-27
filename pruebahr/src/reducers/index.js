import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LoginReducers from './login_reducers';

const rootReducer = combineReducers({
  form: formReducer,
  login: LoginReducers
});

export default rootReducer;