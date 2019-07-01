import React, { Component } from 'react';
import { Provider } from 'react-redux';

// STORE AND MAIN COMPONENT
import store from './src/store';
import DaftarBelanjaan from './src/DaftarBelanjaan';

export default class App extends Component {
  render() {
    return (
      // WRAP MAIN COMPONENT WITH PROVIDER THAT GET STORE
      <Provider store={store}>
        <DaftarBelanjaan />
      </Provider>
    );
  }
}