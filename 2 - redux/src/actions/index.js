//ACTION CREATOR: crea un action
export function selectBook(book){
    // selectBook es un Action Creator. Necesita devolver una action. Un objeto con una propiedad type
    // Action: un objeto con un tipo y un payload
    return {
        type:'BOOK_SELECTED',
        payload: book
    };
}