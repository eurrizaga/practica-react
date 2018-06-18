import { CHANGE_AUTH } from './types';
export function authenticate(isLoggedIn){
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}
//actions coontiene cada funcion que se llama desde el componente, se le aplican los cambios necesarios y se retorna un payload con el tipo que corresponda para identificarlo en el reducer