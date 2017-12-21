// el argumento state no es el state de  la aplicación, solo del state del cual es responsable este reducer
//si state es undefined se seta a null
//
//reducer: recibe el action y segun su tipo actualiza el estado con su payload
export default function(state = null, action){
    switch (action.type){
        case 'BOOK_SELECTED':  
            return action.payload;    
    }
    return state;
}