import React from 'react';
import {
    MDBContainer,
    MDBTextArea,
    MDBCol,
    MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Posts() {
  return (
    <MDBContainer>
     <MDBRow className='mb-3 d-flex justify-content-center align-items-center h-100'>
     
      <MDBInput type='text' name="title" id='title' wrapperClass='mb-4' label='Title of post:' />
      <MDBTextArea label='Message' id='textAreaExample' rows={8} />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form4Example4'
        label='Send me a copy of this message'
        defaultChecked
      />

      <MDBBtn type='submit' className='mb-4' block>
        Submit post
      </MDBBtn>
    
      </MDBRow>
      </MDBContainer>
  );
}