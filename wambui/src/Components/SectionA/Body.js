import React from 'react';
import './body.css';
import Description from '../SectionB/Description';
import Practice from '../SectionC/Practice';


function Body() {
  return (
    <div className='all'>
      <div className='body'>
      
        <div className='background-image'>

          <div className='quote'>
            <h1>You Need a Trusted Law Firm <br/>
            That Helps Deal with Your<br/>
            Litigation
            </h1>
          </div>
        <Description />
        </div>
      </div>
      <Practice />
    </div>
  );
}

export default Body;
