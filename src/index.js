import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import CardList from './CardList';
import { robots } from './robots';
import Hello from './Hello';
// import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <CardList robots={robots} />
    </div>,
    document.getElementById('root')
);

// ReactDOM.render(
//     <Hello greetings="BOOYAH"/>, document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
