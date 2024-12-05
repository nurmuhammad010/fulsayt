import React from 'react'
import Logo from './mock/logo'
import "./css/Footer.css"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className='Footer'>
        <div className="Footer_bir">
            <div className="footer_top">
        <div className="logo">
    <img src="https://mahsulot.com/static/v1/images/logo_mini.png" alt="" />
    <div className="logo_left">
 <ul className="linklar">
            {Logo.map((e) => (
              <card to={e.title} key={e.id}>
                <li className='link-item1'>{e.title}       </li>
                <li className="link-item">{e.name}</li>
                
              </card>
            ))}
          </ul>
      </div>
      </div>
      </div>
      <div className="footer_button">
{/* <BiLogoTelegram /> */}
      </div>
   
    </div>
<div className="Footer_ikki"></div>
<div className="Footer_uch">

</div>
<div className="Footer_tort">

</div>
    </div>
  )
}

export default Footer
