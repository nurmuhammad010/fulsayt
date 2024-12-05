import React from 'react'
import "../css/button_royhat.css";
import Royhat_button from "../mock/royhat_button"
import { Link } from "react-router-dom";
function Button_royhat() {
  return (
<div className="royhat_button">
    <div className='button_royhat_container'>
            {Royhat_button.map((e) => (
              <Link to={e.link} key={e.id}>
                <li className='link-item1'>{e.title}       </li>
                <li className="link-item">{e.name}</li>
                
              </Link>
            ))}
        
    </div>
    </div>
  )
}

export default Button_royhat
