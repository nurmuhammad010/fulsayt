import React from 'react'
import { Link } from "react-router-dom";
import CardAip from '../mock/Card_Api'
import '../css/card.css'

function Header_Card() {
  return (
    <div className='card_container'>
      <div className="card">
        {CardAip.map((i) => (
          <div className='cards'  key={i.id}>
            <img src={i.image} alt="" />
            <h2 className='link-item3'>{i.price}</h2>
            <h3 className='link-item2'>{i.title}</h3>
            <button className="btn-button">
            <Link to={i.link} key={i.id}>
                <div className="get-data-text">
                <span className="card-data-text">{i.text}</span>
                </div>
            </Link>
            </button>
         </div>
        ))}

      </div>
    </div>
  )
}

export default Header_Card;
