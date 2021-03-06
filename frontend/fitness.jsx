import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

//  Temps
import { login, signup, logout } from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  let root = document.getElementById('root');
  window.login = login;
  window.getState = store.getState;
  window.logout = logout;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, root)
});