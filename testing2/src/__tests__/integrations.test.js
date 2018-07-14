import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';
import Root from 'components/Root';
import App from 'components/app';

beforeEach(() =>{
    //moxios busca evitar que axios haga un request en entorno de testing simulandole una respuesta
    moxios.install();
    //hay que interceptar la llamada axios y devolverle data fija
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [
            {name: 'Fetch 1'},
            {name: 'Fetch 2'}
        ]
    });
})
afterEach(() => {
    // saquemos el stub despues de terminar estso tests
    moxios.uninstall();
})

// test de integracion. Evalua el funcionamiento de la apicacion en su conjunto
it ('can fetch a list of objects and display them', (done) => {
    //Attemp to render the entire App
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )
    // find the FetchComments button and click it
    wrapped.find('.fetch-comments').simulate('click');

    //Introduce a pause to wait for moxios to resolve asyncronically
    moxios.wait(()=>{
        wrapped.update();
        // expect to find a lista of comments!
        expect(wrapped.find('li').length).toEqual(2);
        // si la propiedad donde es llamada en la definicion de la funcion no se asume que el test terminó hasta que se indique
        done();
        wrapped.unmount();
    });

})