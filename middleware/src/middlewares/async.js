//primeras 2 líneas van siempre
export default function({ dispatch }){
    return next => action => {
        //se llama para todos los action creators por bindearlo en index.js
        
        //si la accion no es una promesa o no tiene payload
        if (!action.payload || !action.payload.then){
            return next(action);
        }
        action.payload.then(response => {
            //extender la accion con un nuevo payload
            const newAction =  {...action, payload:response}
            //le pasa el ciclo de nuevo
            dispatch(newAction);
        });
    }
}
/*
    export default function({dispatch}){
        return function(next){
            return function(action){
                console.log(action);
                next(action);
            }
        }
    }
*/