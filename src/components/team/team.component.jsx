import React from 'react';
import userImage from '../../assests/user-svgrepo-com.svg';
// import emailImage from '../../assests/email-svgrepo-com.svg';
import Sidebar from '../../pages/sidebar/sidebar.component';
import './team.styles.css';
import {teamDetails} from './team';

class Team extends React.Component{
    state ={
            teamData : teamDetails
    }
    render(){
    return(
    <div className='team_page'>
        <div className='row'>
            <div className='col-md-3'>
            <Sidebar />
            </div>
            <div className='col-md-9 pl-10'>
            <h1>Meet The Team</h1>
                    <hr />
                <div className='row'>
                    <div className='col-md-5'>
                    {this.state.teamData.team.teamsName.map((teamUser, i) =>
                    <div key={i}>
                          <h4> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;{teamUser.name}</h4>
                        {/* <td>{item.date}</td>
                        <td>{item.desc}</td>
                        <td>{item.amount}</td> */}

                    </div>
                    )}
                        
                        {/* <h2> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;Gali likhitha</h2> 
                        <h2> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;Palleti Kavitha</h2>
                        <h2> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;Khushbhu</h2>
                        <h2> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;Aganya</h2>
                        <h2> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;Aishwarya</h2>
                        <h2> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;Jyothi paritala</h2>
                        <h2> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;Gali Aswani</h2>
                        <h2> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;ishitha</h2>
                        <h2> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;Gurram Bhargavi</h2> */}

                    </div>
                    {/* <div className='col-md-7 pl-20 pr-30'>
                            <span className=''><img src={emailImage} alt='' height='300px' width='300px'  /></span>
                    </div> */}
                </div>

            </div>

        </div>
    </div>
    )
    }
};
export default Team;