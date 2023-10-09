import React from 'react';
import { CDBModalFooter,  CDBListGroup, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import './footer.css'

const Footer = () => {
  return (
    <CDBModalFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src="https://cdn.vectorstock.com/i/preview-1x/82/05/lady-justice-themis-golden-emblem-vector-29118205.webp" width="60px" style={{ paddingTop: '3rem' }}/>
              <span className="ms-3 h5 font-weight-bold" style={{ fontWeight: '600', color: 'white', paddingTop: '3rem' }}>Wambui K. Advocates</span>
            </a>

            <CDBBox display="flex" className="mt-4" style={{ paddingTop: '2rem' }}>
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600', color: 'white' }}>
              Opening Hours
            </p>
            <CDBListGroup  flex="column" style={{ cursor: 'pointer', padding: '0', color: 'white' }}>
              <CDBListGroup >Mon - Fri</CDBListGroup>
              <CDBListGroup >8.00am - 5.00pm</CDBListGroup>
              <CDBListGroup >Saturday</CDBListGroup>
              <CDBListGroup >8.00am - 12.00pm</CDBListGroup>
            </CDBListGroup>
          </CDBBox>

                    <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600', color: 'white' }}>
              Location
            </p>
            <CDBListGroup  flex="column" style={{ cursor: 'pointer', padding: '0', color: 'white' }}>
              <CDBListGroup >Tewan Plaza,</CDBListGroup>
              <CDBListGroup >3rd floor, Room T28,</CDBListGroup>
              <CDBListGroup >Ol'kalou, Nyandarua</CDBListGroup>
              <CDBListGroup ></CDBListGroup><br />
              <CDBListGroup >Hannah House,</CDBListGroup>
              <CDBListGroup >Ground floor, Room G11,</CDBListGroup>
              <CDBListGroup >Githunguri,</CDBListGroup>
              <CDBListGroup >Nairobi, Kenya</CDBListGroup>
            </CDBListGroup>
          </CDBBox>

                    <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600', color: 'white' }}>
              Contact
            </p>
            <CDBListGroup  flex="column" style={{ cursor: 'pointer', padding: '0', color: 'white' }}>
              <CDBListGroup >wambuikadvocates@gmail.com</CDBListGroup>
              <CDBListGroup >+254722417935</CDBListGroup>
            </CDBListGroup>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5" style={{ fontWeight: '600', color: 'white' }}>&copy; 2023, Wambui K. Advocates.</small>
      </CDBBox>
    </CDBModalFooter>
  );
};

export default Footer;