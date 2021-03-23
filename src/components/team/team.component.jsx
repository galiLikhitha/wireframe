import React from 'react';
import userImage from '../../assests/user-svgrepo-com.svg';
import emailImage from '../../assests/email-svgrepo-com.svg';
import './team.styles.css';

const Team = () =>(
    <div className='team_page'>
                <h1>Meet The Team</h1>
                    <hr />
                <div className='row'>
                    <div className='col-md-7'>
                        <h2> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;Gali likhitha</h2> 
                        <h2> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;Gali likhitha</h2>
                        <h2> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;Gali likhitha</h2>
                        <h2> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;Gali likhitha</h2>
                        <h2> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;Gali likhitha</h2>
                        <h2> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;Gali likhitha</h2>
                        <h2> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;Gali likhitha</h2>
                        <h2> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;Gali likhitha</h2>
                        <h2> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;Gali likhitha</h2>

                    </div>
                    <div className='col-md-5'>
                            <span className='emailImage'><img src={emailImage} alt=''  /></span>
                    </div>
                </div>

            </div>
);
export default Team;