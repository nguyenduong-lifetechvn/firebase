import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebaseConfig';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);
  const user = auth.currentUser;
  let userInfor = (<>
  <MDBNavbarItem>
   <MDBNavbarLink ><Link to={"/login"}>Login</Link></MDBNavbarLink>
    </MDBNavbarItem>
      <MDBNavbarItem>
      <MDBNavbarLink><Link to={"/register"}>Register</Link></MDBNavbarLink>
     </MDBNavbarItem></>)

  if (user !== null)
  userInfor = (
      <>
          <Link className="nav-link text-danger" to="/">
              {/* <img src={user.image} alt={user.username} width="30" className="rounded-circle" /> */}
              Chào {user.email}
          </Link>
          <MDBBtn className="btn btn-secondary" > Đăng xuất</MDBBtn>
      </>
  )

  return (
    <MDBNavbar expand='lg' light bgColor='light' style={{width:'1050px'}}>
        <MDBNavbarBrand href='' ><Link to={"/"}>Home</Link></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' >
              <Link to={"/post"}>Create Post</Link>
                
              </MDBNavbarLink>
            </MDBNavbarItem>
            {userInfor}
            

          </MDBNavbarNav>

          <form className='d-flex input-group w-3'>
            <input type='search' className='form-control' placeholder='Type content you want' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
    </MDBNavbar>
  );
}