import React from 'react';
import emailImage from '../../assests/email-svgrepo-com.svg';
import Checkbox from '@material-ui/core/Checkbox'; 
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'; 
import CheckBoxIcon from '@material-ui/icons/CheckBox'; 
import Sidebar from '../../pages/sidebar/sidebar.component';
import './dashboard.styles.css';
import {userDetails} from './data';
// import { Link } from 'react-router-dom';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />; 
const checkedIcon = <CheckBoxIcon fontSize="small" />; 

class Dashboard extends React.Component{
    state ={
            userData : userDetails
    }
    

// const Dashboard = () => ( 
    render(){
        return(
    <div className='header_section'>
        <div className='row'>
        <div className='col-md-3'>
            <Sidebar />
       </div>
        <div className='col-md-9 pl-10'>
        <div className='row'>
            <div className='col-md-2'>
                 <span className='emailImage'><img src={emailImage} alt=''  /></span>
            </div>
            <div className='col-md-6 login'>
                <h2 className='userName'>Welcome {this.state.userData.customer.name}
                    <p className='login'>Lost Login : {this.state.userData.customer.last_login} </p>
                </h2>
            </div>
        </div>  
        <hr /> 
        <div><span className='account-details'>Account Balance :{this.state.userData.customer.balance}</span></div>  
        <div className='customer_table'>
            <table className='table table-bordered  login1'>
                <thead >
                    <tr className='header-color'>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.userData.customer.transaction.map((item, i) =>
                    <tr key={i}>
                        <td>{item.date}</td>
                        <td>{item.desc}</td>
                        <td>{item.amount}</td>

                    </tr>
                    )}
                
                </tbody>

            </table>
        </div> 
        <hr />
        <div className='row'>
            <div className='col-md-5'>
                <h5 >Subscribe To Alerts</h5>
                <div>
                    <Checkbox  icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} />
                    <span className='login1'>SMS Alert</span>
                 </div>
                 <div>
                    <Checkbox  icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} />
                    <span className='login1'>Marketing Newsletter</span>
                 </div>
                 <div>
                    <Checkbox  icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} />
                    <span className='login1'>flyers</span>
                 </div>

            </div>
            <div className='col-md-7'>
                <h5>Two Way Data Binding</h5>
                <div className='login1'>
                    <input type='text' value ='' placeholder='Enter value for two way binding' />
                </div>
                
            </div>
           
        </div>
         <button type="button" class="btn btn-info">submit</button>
         </div>
         </div>
       
    </div>
        )
    }
}
export default Dashboard;
