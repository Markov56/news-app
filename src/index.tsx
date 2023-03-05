import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import App from 'components/App';
import { setupStore } from 'redux/store';

import i18n from 'i18n';

const store = setupStore();

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </I18nextProvider>,

  document.getElementById('root')
);
