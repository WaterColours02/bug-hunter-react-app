import React from 'react';
import { render } from 'react-dom';
import SignIn from './components/SignIn';
import App from './components/App'
import Router from './components/Router'
import './css/style.css'

render(<Router/>, document.querySelector('#main'))