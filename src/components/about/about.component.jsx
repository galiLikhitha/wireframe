import React  from 'react';
import emailImage from '../../assests/email-svgrepo-com.svg';
import './about.styles.css';

const About =() => (
    <div className='about_section'>
        <h1>About iJavaScript</h1>
        <hr />
       
            <div className='row col-md-12'>
                <div className='col-md-5'>
                     <span className='emailImage'><img src={emailImage} alt=''  /></span>
                </div>
                <div className='col-md-7 paragraph'>
                    <p className='paragraph'>ijavascript is a research group , founded to check the different javascript framework based on different design pattern .

                    </p>
                    <p className='paragraph'>During Kick-off it will React Angular Knockout and Ember js features. Thi use case wil prove different aspects of framework capabilities. </p>
                </div>
            </div>
       
        <div className='second-part'>
            <h2>Contact us</h2>
            <h6><label>Email :</label><span>galilikhitha@17</span></h6>
            <h6><label>Link :</label><span>https://dream.com</span></h6>
            <h6><label>Land Line :</label><span>012-234-7890</span></h6>
           

            {/* <h2>Re-usable Component</h2>
            <div className='row'>
               
                 <div class="card-columns">
                     <div class="card bg-warning">
                        <div class="card-body">
                        </div>
                    </div>
                    <div class="card bg-warning">
                        <div class="card-body">
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
    
);

export default About;