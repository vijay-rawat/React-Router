import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route , Link , Switch, BrowserRouter as Router} from "react-router-dom"
import App from './App';


const routing = (
  <Router>
    <Route path="/" component={App} />
  </Router>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);




