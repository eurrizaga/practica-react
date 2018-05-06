import React from 'react';
import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

import chaiJquery from 'chai-jquery';

// Set up tetsing ennvironment to run like a browser in the command line
//window ---> global en nodejs
global.document = jsdom.jsdom('<!-doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

// build -renderComponent- helper that should render a given react class
function renderComponent(ComponentClass, props, state){
  const componentInstance = TestUtils.renderIntoDocument(
  <Provider store={createStore(reducers, state)}>
    <ComponentClass {...props} />
  </Provider>
  
  );

  var aux = ReactDOM.findDOMNode(componentInstance); // produce HTML
  return $(aux);
}
// build helper for simulating events
$.fn.simulate = function(eventName, value){
  if (value){
    this.val(value);
  }  
  TestUtils.Simulate[eventName](this[0]);
}

// para llamar $('div').simulate()

// set up chai-jquery
chaiJquery(chai, chai.util, $);
export { renderComponent, expect }