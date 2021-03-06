import React  from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from './Sidebar';
import Chat from './Chat';
import './App.css';
import Login from './Login';
import { useStateValue } from './StateProvider';

// Hosted on: https://whatsapp-web-clone-22749.web.app/

function App() {

  const [{ user }, dispatch] = useStateValue()

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

