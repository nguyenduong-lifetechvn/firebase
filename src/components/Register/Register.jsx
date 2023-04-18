import React, { useState } from 'react';
import {  auth, db} from '../../firebase/firebaseConfig'
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from "firebase/auth";
import bcrypt from "bcryptjs-react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Register() {
  const [data,setData] = useState({})
  const collectionRef = collection(db, 'users')

  const handleInput = (event) => {
    let record = { [event.target.name]: event.target.value}

    setData({...data,...record})
  }

  const handleRegisterWithEmailAndPassword = () => {
    createUserWithEmailAndPassword(auth,data.email, data.password)
    .then((response) => {
      // Signed in 
      const user = response.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage,errorCode)
    });
  }

  const handleSubmit = () => {
    addDoc(collectionRef, {
      name: data.fullname,
      email: data.email,
      password: bcrypt.hashSync(data.password, 8),
      dob: data.dob,
    }).then(() => {
      alert('Data Added')
    }).catch((error) => {
      alert(error.message)
    })
  }

  const getData = () => {
    getDocs(collectionRef)
    .then((response) => {
      console.log(response.docs.map((item) => {return {...item.data(),id: item.id}} ))
    })
  }

  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-secondary text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
              <p className="text-white-50 mb-5">Please register your information with our!</p>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Your Fullname' id='fullname' type='text' size="lg" name="fullname" 
              onChange={event => handleInput(event)}/>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='email' type='email' size="lg" name="email" 
              onChange={event => handleInput(event)}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='password' type='password' size="lg" name="password" 
              onChange={event => handleInput(event)}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Confirm Password' id='confirm' type='password' size="lg" name="confirm" 
              onChange={''}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Day of birth' id='dob' type='date' size="lg" name="dob" 
              onChange={event => handleInput(event)} />
              
              <MDBBtn onClick={handleRegisterWithEmailAndPassword} outline className='mx-2 px-5' color='' size='lg'>
                Register
              </MDBBtn>

              <hr className="my-4" />
              <div>
                <p className="mb-0">You already have an account? <Link to={`/login`} class="text-white-50 fw-bold">Login</Link></p>
              </div>
             
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Register;