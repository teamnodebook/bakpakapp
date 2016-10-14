import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';
import Nav from './nav.jsx';

render(<App/>, document.querySelector("#app"));
render(<Nav/>, document.querySelector("#nav"));
