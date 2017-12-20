import { FETCH_WEATHER } from '../actions/index';
export default function(state = [], action){
	switch(action.type){
		case FETCH_WEATHER: 
			//return state.concat([ action.payload.data ]);
			//es lo mismo. hay que concatenar
			return [action.payload.data, ...state];
		break;
	}
	return state;
}
