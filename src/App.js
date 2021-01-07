import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from './Sidebar';
import Chat from './Chat';
import './App.css';
import Login from './Login';


function App() {

  const [user, setUser] = useState(null)

  return (
    <div className="app">

      {!user ? (
        <Login />
      ) : (
        <div class="app__body"> 
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              {/* <Chat /> */}
            </Route>
          </Switch>
        </Router>

      </div>

      )}
    </div>
  );
}

export default App;

