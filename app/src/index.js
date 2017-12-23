import React from 'react';
import { render } from 'react-snapshot';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import './index.css';

render(<App />, document.getElementById('app'));

registerServiceWorker();
