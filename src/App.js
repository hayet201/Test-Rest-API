import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Users from './components/Users';
import Posts from './components/Posts'
import Comments from './components/Comments'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Route path='/' render={() => {
        return (<div className="user">
          
          <Link to='/Users'><button type="button" class="btn btn-secondary btn">Users</button></Link>
        </div>)
      }
      }/>  
        <Route path='/Posts/:userId' component={Posts}/>
        <Route path='/Users' component={Users}/>
        <Route path='/Comments/:postId' component={Comments}/>
    </Router>
    </div>
  );
}

export default App;
