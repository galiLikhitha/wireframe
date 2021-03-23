import React from 'react';
import { Redirect } from 'react-router';
import history from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './sign-in.styles.css';
class SignIn extends React.Component{
  constructor(props) {
    super(props);
    this.props = props;
    console.log("props", this.props)
   
    this.state = {
      userId : '',
      password:'',
    };
     this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitValue = this.submitValue.bind(this);
  }
  handleSubmit = event =>{
    event.preventDefault();
    this.setState({userId :'', password:''});
  };
  handleChange= event => {
    const {value, name} = event.target;
    this.setState({[name] : value});
  }
  
   submitValue(){
    // console.log("value of", this);
     this.props.history.push('/mainpage');
     
   }

    render(){
      return(
        
        <div className='pageColor'>
          <div className='row col-md-12 header_part'>
            <div className=' col-md-4 '>
              <h6>Angular js</h6>
              <h1 className='javas'>i javaScript</h1>
            </div>
            <div className='col-md-8  part'>     
            </div>
          </div>
          <div>   
          <form onSubmit={this.handleSubmit} className='second_part'>
            <div className='email_box'>
            <label className='users'>User ID</label>
            <input name='userId' type='text'  label='userId' value={this.state.userId} 
            onChange={this.handleChange}
             placeholder='Enter User ID' required
            ></input>
            </div>
            <div className='email_box'>
            <label className='users1'>Password</label>
            <input name='password' type='password'  label='password' value={this.state.password}
            onChange={this.handleChange} placeholder='password' required
            ></input>
            </div>
            <button className='button1' type='button' onClick={this.submitValue} >Log in</button>
          </form>
          </div>
        </div>
      );
    };
};
export default withRouter(SignIn);


