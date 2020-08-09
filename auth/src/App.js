import React from 'react';
import { Route } from 'react-router-dom'
import Success from './success'
import myResume from './myResume/myResume'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
    <Route exact path='/' component={myResume} />
    <Route exact path ="/success" component={Success}/>
    </React.Fragment>
  );
}

export default App;
