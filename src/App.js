import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
import MainPage from './pages/main-page/main-page.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';
import Team from './components/team/team.component';
import Dashboard from './components/dashboard/dashboard.component';
import About from './components/about/about.component';



const App = () =>{
    return(
      <Router>
          <Switch>
            <Route exact component= {SignInPage} path='/' />
            <Route component={MainPage} path='/mainpage'  />
            <Route component={Team} path='/team' />
            <Route component={Dashboard} path='/dashboard' />
            <Route component={About} path='/about' />
        </Switch> 
      </Router>   
    )
}

export default App;
