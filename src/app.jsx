import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.scss';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World Again!</h1>
        <p><a className="btn btn-primary btn-lg">Enjoy!</a></p>
      </div>
    )
  }
}