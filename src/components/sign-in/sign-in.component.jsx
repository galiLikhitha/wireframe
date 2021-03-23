import React from 'react';
import { Redirect } from 'react-router';
import './sign-in.styles.css';
class SignIn extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userId : '',
      password:'',
      // value: '',
      // input: {},
      // errors: {}
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = event =>{
    event.preventDefault();
    this.setState({userId :'', password:''});
  };
  handleChange= event => {
    const {value, name} = event.target;
    this.setState({[name] : value});
  }
  // handleChange(event) {
  //   let input = this.state.input;
  //   input[event.target.name] = event.target.value;
  //   this.setState({
  //     input
      
  //   });
  //   // console.log("input",input)
    
  // }
  // handleSubmit(event) {
  //   event.preventDefault();
  //   if(this.validate()){
  //       console.log(this.state);
  //       let input = {};
  //       input["username"] = "";
  //       // input["email"] = "";
  //       input["password"] = "";
  //       this.setState({input:input});
  //       alert('Demo Form is submitted');
  //   }
  // }
  // validate(){

  //     let input = this.state.input;
  //     let errors = {};
  //     let isValid = true;
  //     if (!input["username"]) {
  //       isValid = false;
  //       errors["username"] = "Please enter your username.";
  //     }

  //     if (typeof input["username"] !== "undefined") {
  //       const re = /^\S*$/;
  //       if(input["username"].length < 8 || !re.test(input["username"])){
  //           isValid = false;
  //           errors["username"] = "Please enter valid username.";
  //       }
  //     }

  //     if (!input["password"]) {
  //       isValid = false;
  //       errors["password"] = "Please enter your password.";
  //     }
  //     if (typeof input["password"] !== "undefined") {
  //       if(input["password"].length < 8){
  //           isValid = false;
  //           errors["password"] = "Please add at least 6 charachter.";
  //       }
  //     }
  //     this.setState({
  //       errors: errors
  //     });
  //     return isValid;
  //   }
    SubmitValue = e =>{
      this.props.handleData('loggedin');
      return <Redirect to='/dashboard' />

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
            <button type='submit' onClick={this.SubmitValue} value='Submit'>Log in</button>
          </form>
          </div>
        </div>
      );
    };
};
export default SignIn;


