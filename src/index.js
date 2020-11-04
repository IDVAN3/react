import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux/store';

const store = configureStore();

const rootElement = document.getElementById('root');
const Index = () => <Provider store={store}><App /></Provider>;

ReactDOM.render(<Index />, rootElement);

serviceWorker.unregister();
