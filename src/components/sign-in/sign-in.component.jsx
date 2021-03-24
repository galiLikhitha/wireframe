import React from 'react';
// import { Redirect } from 'react-router';
// import history from 'react-router-dom';
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
      value:'',
      input:'',
      error:''

      };
     this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitValue = this.submitValue.bind(this);
  }
  handleSubmit = event =>{
    event.preventDefault();
    this.setState({userId :'', password:''});
    if(this.validate()){
            console.log(this.state);
            let input = {};
            input["userId"] = "";
            // input["email"] = "";
            input["password"] = "";
            this.setState({input:input});
            alert('Demo Form is submitted');
        }
        
  };
  handleChange= event => {
    const {value, name} = event.target;
    this.setState({[name] : value});
  };
   submitValue(){
     this.props.history.push('/dashboard');
   };
   validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;
        if (!input["userId"]) {
          isValid = false;
          errors["userId"] = "Please enter your userId.";
        }
        if (typeof input["userId"] !== "undefined") {
          const re = /^\S*$/;
          if(input["userId"].length < 8 || !re.test(input["userId"])){
              isValid = false;
              errors["userId"] = "Please enter valid userId.";
          }
        }
        if (!input["password"]) {
          isValid = false;
          errors["password"] = "Please enter your password.";
        }
        if (typeof input["password"] !== "undefined") {
          if(input["password"].length < 8){
              isValid = false;
              errors["password"] = "Please add at least 6 charachter.";
          }
        }
        this.setState({
          errors: errors
        });
        return isValid;
      }

    render(){
      return(
        
        <div className='pageColor'>
          <div className='row col-md-12 header_part'>
            <div className=' col-md-4 '>
              <h6>Angular js</h6>
              <h1 className='javas'>iJavaScript</h1>
            </div>
            {/* <div className='col-md-8  part'>     
            </div> */}
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
            <br />
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


