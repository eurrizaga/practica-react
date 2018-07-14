import React from 'react';

import { mount , unmount } from 'enzyme';
import CommentBox from 'components/comment_box';

// importo Root para poder darle un store al componente y poder simular un componente que contenga Redux
import Root from '../Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(<Root><CommentBox /></Root>);
});

afterEach (() => {
    wrapped.unmount();
})
it('has a textarea and 2 buttons', () => {
    //vamos a usar fullDOM rendering, así que hay que recordar desmontar el componente
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

// describe permite agrupar tests similares juntos
describe('textarea', () => {
    //aca se puede hacer organizacion y meter un beforeach
    beforeEach(() => {
        //simulo un cambio y paso un objeto de evento a integrar
        wrapped.find('textarea').simulate('change', {
            target: {value: 'new comment'}
        });
        // fuerzo al componente a actualizar porque de otra forma se haría de forma asíncrona
        wrapped.update();
    })
    it('textarea allows text input', () => {
        //esperamos que el valor del text area sea el que ingresamos
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('text area clears after submit', () =>{
        // no necesitamos esta linea porque ya se probó en el test anterior
        //expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
})
