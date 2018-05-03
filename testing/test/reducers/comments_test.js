import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENS, SAVE_COMMENT } from '../../src/actions/types';
describe('Comments reducer', () => {
    // it('handles action with unknown type', () => {
    //     const action = commentReducer(undefined, {});
    //     //expect(action).to.be.instanceof(Array);
    //     //eql es una compraración profunda (para arrays y objetos)
    //     expect(action).to.eql([]);
    // });
    // it('handles action of type SAVE_COMMENT', () => {
    //     const action = { type: SAVE_COMMENT, payload: 'new comment'};
    //     expect(commentReducer([], action)).to.eql(['new comment']);
    // });
});