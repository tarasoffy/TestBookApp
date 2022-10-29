import React from 'react';
import {MainStack} from './src/navigations';
import {store} from './src/store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
}
