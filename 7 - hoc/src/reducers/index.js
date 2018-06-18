import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
const rootReducer = combineReducers({
  authenticated: authenticationReducer
  //propiedad del estado de la aplicacion: reducer que le asigna el valor
});

export default rootReducer;
//combina todos los reducers en un uńico archivo