import React from 'react';
import '../styles/Footer.css'
import FbIcon from '@material-ui/icons/Facebook';
import IsIcon from '@material-ui/icons/Instagram'
import TWIcon from '@material-ui/icons/Twitter'
function Footer(){
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <FbIcon/>
            <IsIcon/>
            <TWIcon/>
        </div>
        <p> &copy; 2021 Pizzarea.com</p>
    </div>

  );
}
export default Footer;