import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackgroundImage from '../../assets/background.png';
import stoneIcon from '../../assets/milestoneIcon2.png';
import './Login.css';
import axios from 'axios';
import Swal from 'sweetalert2';



var selectionStyle = {
   backgroundImage: `url(${BackgroundImage})`,
   backgroundSize: 'contain',
   height: '1400px',
   width: '100vw',
   backgroundRepeat: 'no-repeat',
   position: 'fixed'
}

class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {
         username: '',
         password: ''
      }
   }

   async login() {
      const { username, password } = this.state;
      const res = await axios.post(`/auth/login`, { username: username, password: password })
      console.log(res.data)
      if (res.data.loggedIn) {
         await Swal(
            'Woohoo!',
            'You have successfully logged in.',
            'success'
         )
         this.props.history.push('/dashboard')
      } else {
         await Swal({
            type: 'error',
            title: 'Oops!',
            text: res.data.message
         })
      }
   }



   render() {
      return (
         <div className='main' style={selectionStyle}>
            <div className='navbar'>
               <Link to='/' style={{textDecoration: 'none'}}>
                  <div className='brand-container'>
                  <img src={stoneIcon} alt="" className='stone-icon'/>
                  <p className='brand' >Milestone</p>
                  </div>
               </Link>
            
            </div>


            <div className='login-menu'>
               <h2 className='login-text' >Login</h2>
               <input onChange={ (e) => this.setState({username: e.target.value}) } type="text" placeholder='Username' className='input' />
               <input onChange={ (e) => this.setState({password: e.target.value}) } type="text" placeholder='Password' className='input' />
               <div>
                  <button onClick={ () => this.props.history.push('/')} >Back</button>
                  <button onClick={ () => this.login() } className='input' >Submit</button>
               </div>
            </div>
         </div>
      );
   }
}

export default Login;