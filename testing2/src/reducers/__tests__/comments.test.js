import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

it(' handles actions of type SAVE_COMMENT', () => {
    const content = 'New comment'
    const action = {
        type: SAVE_COMMENT,
        payload: content
    }

    const newState = commentsReducer([], action);

    expect(newState).toEqual([content]);
});
it (' handles action with unknown type', () => {
    const newState = commentsReducer([], {});
    expect(newState).toEqual([]);
})