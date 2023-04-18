import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
import { signInWithPopup, onAuthStateChanged ,signInWithEmailAndPassword ,GoogleAuthProvider } from "firebase/auth";
import { 
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import {  auth, providerFB} from '../../firebase/firebaseConfig'

function Login() {
  const navigate = useNavigate();
  const [data,setData] = useState({})
  let googleProvide = new GoogleAuthProvider()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/post")
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(uid)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  const handleInput = (event) => {
    let record = { [event.target.name]: event.target.value}
    setData({...data,...record})
  }

  const handleSubmit = () => {
    signInWithEmailAndPassword (auth, data.email, data.password)
      .then((response) => {
        // Signed in 
        const user = response.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode)
      });
  }
  
  const handleSubmitWithGoogle = () => {
    signInWithPopup (auth, googleProvide)
      .then((response) => {
        // Signed in 
        const user = response.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
  }
  return (
  
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-secondary text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='email' 
              onChange={event => handleInput(event)} type='email' size="lg" name='email'/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='password'
              onChange={event => handleInput(event)} type='password' size="lg" name='password'/>

              <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
              <MDBBtn outline className='mx-2 px-5' color='' size='lg' onClick={handleSubmit}>
                Login
              </MDBBtn>

              <hr className="my-4" />

                <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}} onClick={handleSubmitWithGoogle}>
                <MDBIcon fab icon="google" className="mx-2"/>
                Sign in with google
                </MDBBtn>

                <MDBBtn  className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
                <MDBIcon fab icon="facebook-f" className="mx-2"/>
                Sign in with facebook
                </MDBBtn>

              <div>
                <p className="mb-0">Don't have an account? <Link to={`/register`} class="text-white-50 fw-bold">Register</Link></p>

              </div>

            
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Login;