import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Firebase, { FirebaseContext } from './Firebase/Firestore';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
      <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

reportWebVitals();
