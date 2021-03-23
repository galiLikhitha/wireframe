import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import MainPage from './pages/main-page/main-page.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';

const App = () =>{
    return(
      <Switch>
        <Router>
          {/* <SignInPage/> */}
          {/* <Route exact path="/"> {SignInPage ? <Redirect to="/" /> : <MainPage />}</Route> */}
          <MainPage />
        </Router> 
        </Switch>   
    )
}

export default App;
