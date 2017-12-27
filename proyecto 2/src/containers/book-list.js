import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title}
                    onClick={() => this.props.selectBook(book)} 
                    className="list-group-item">
                    {book.title}
                </li>
            )
        });
    }
    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    //Lo que se retorne aquí aparecerá como props en BookList
    return {
        books: state.books
    }
}

//Cualquier cosa retornada de esta funcion serrá un prop en el container BookList
function mapDispatchToProps(dispatch){
    // cuando selectBook es llamado el resultado será pasado a todos los reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// Proveer BookList de componente a container. Necesita saber acerca de este nuevo método de dispatch, SelectBook. Hacerlo disponible como prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);