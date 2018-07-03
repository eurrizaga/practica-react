import tv4 from 'tv4';
import stateSchema from './state_schema';
export default ({ dispatch, getState }) => (next) => (action) => {
    // necesitamos asegurarnos que haya pasado por todos los otros para obtener el estado final
    next(action);
    console.log(getState());
    if(!tv4.validate(getState(), stateSchema)){
        console.warn('invalid state schema');
    }
}