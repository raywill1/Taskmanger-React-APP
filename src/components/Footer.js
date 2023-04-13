import React from 'react'
import {FaGithubSquare , FaEnvelope, FaFacebookSquare, FaTwitterSquare,
   FaInstagramSquare} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-items'>
            <ul>
              <li>Home</li>
              <li>Support</li>
              <li>Links</li>
              <li>msjnjdcbd</li>
              <li>sjkmjkams</li>
              <li>njknsdnkj</li>
              <li>bdjnjns</li>
              <li>nsjn</li>
            </ul>
            <ul>
              <li><FaFacebookSquare /></li>
              <li><FaTwitterSquare /></li>
              <li><FaInstagramSquare /></li>
              <li><FaEnvelope /></li>
              <li><FaGithubSquare /> </li>
            </ul>
            <hr />
       </div>
       <div className='copyright'>
       &copy 2022.
        </div>
    </div>
  )
}

export default Footer