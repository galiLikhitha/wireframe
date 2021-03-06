import React from 'react';
import CommonPage from '../common-page/common-page.component';
import Sidebar from '../sidebar/sidebar.component';
// import SignIn from '../../components/sign-in/sign-in.component';
import './main-page.styles.css';

class MainPage extends React.Component{
    constructor(){
        super();
        this.state={
            pagesStatus : 'loggedout'
        }
    }

    render(){
        return(
            <React.Fragment>
                <div className='main_section'>
                    <div className='left'>
                        <Sidebar />
                    </div>
                    <div className='main'>
                        <CommonPage />
                    </div>
                </div>
            </React.Fragment>
        )
    }
};
export default MainPage;
