import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';
describe('CommentList', () => {
    let component;
    beforeEach(() => {
        //datos de prueba
        const props = { comments: ['New comment', 'Other new comment']};
        component = renderComponent(CommentList, null, props);
    })
    it('shows a comment on each LI', () => {
        expect(component.find('li').length).to.equal(2);
    });
    it('given a list of comments', () => {
        expect(component).to.contain('New comment');
        expect(component).to.contain('Other new comment');
    });
})