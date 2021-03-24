import React from 'react';
import  {Switch, Route} from 'react-router-dom';
import About from '../../components/about/about.component';
import Dashboard from '../../components/dashboard/dashboard.component';
import Team from '../../components/team/team.component';
import './common-page.styles.css';
const CommonPage = () =>{
    return(
    <React.Fragment>
        
            <Switch>
            <div className='menu pl-0'>
                <Route exact path='/dashboard' component={Dashboard} />
                <Route  path='/about' component={About} />
                <Route  path='/team' component={Team} />
            </div>
            </Switch>
      

    </React.Fragment>
    )
};
export default CommonPage;
