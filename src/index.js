import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import 'antd/dist/antd.css';

import history from './utils/history'
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>
    , document.getElementById('root'));
serviceWorker.unregister();
