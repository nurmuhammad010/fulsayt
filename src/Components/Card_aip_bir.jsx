import React from 'react'
import  Card_aip_bir1 from '../mock/Card_api_bir'
import Buttton from './buttton'
import '../css/Card_aip_bir.css'
import { Link } from "react-router-dom";
function Card_aip_bir() {
  return (
    <div className='Card_container1'>
        <div className="card">
        {Card_aip_bir1.map((i) => (
          <div className='cards'  key={i.id}>
            <img src={i.image} alt="" />
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

export default Card_aip_bir
