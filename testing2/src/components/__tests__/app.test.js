import React from 'react';
import { shallow } from 'enzyme';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

import App from 'components/app';
import CommentBox from 'components/comment_box';
import CommentList from 'components/comment_list';
// import reducers from '../../reducers';

let wrapped;
beforeEach(() => {
    wrapped = shallow(<App />);
})

it('shows a comment box', () => {
    /*
    
    ReactDOM.render(
        <Provider store={createStoreWithMiddleware(reducers)}>
            <App />
        </Provider>, div);

    // mira dentro del div y chequea para ver si el commentBox está ahí
    // no conviene porque conoces funcionamiento de commentbox desde App
    //expect(div.innerHTML).toContain('Add a comment');
    
    //clean-up
    ReactDOM.unmountComponentAtNode(div);
    */
    
    //espera que haya un CommentBox en el componente
    expect(wrapped.find(CommentBox).length).toEqual(1);

});
it('shows a comment list', () => {
    //espera que haya un CommentList en el componente
    expect(wrapped.find(CommentList).length).toEqual(1);


});