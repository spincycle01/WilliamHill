import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default (props) => {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk, logger))}>
      {props.children}
    </Provider>
  );
};
