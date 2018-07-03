import React from 'react';

import { mount , unmount } from 'enzyme';
import CommentBox from 'components/comment_box';


import { connect } from 'react-redux';
import * as actions from 'actions';


let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

afterEach (() => {
    wrapped.unmount();
})
it('has a textarea and button', () => {
    //vamos a usar fullDOM rendering, así que hay que recordar desmontar el componente
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

it('textarea allows text input', () => {
    //simulo un cambio y paso un objeto de evento a integrar
    wrapped.find('textarea').simulate('change', {
        target: {value: 'new comment'}
    });
    // fuerzo al componente a actualizar porque de otra forma se haría de forma asíncrona
    wrapped.update();

    //esperamos que el valor del text area sea el que ingresamos
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

it('text area clears after submit', () =>{
    wrapped.find('textarea').simulate('change', {
        target: {value: 'new comment'}
    });
    wrapped.update();
    //expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
});
