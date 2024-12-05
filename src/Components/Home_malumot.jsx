import React from 'react'
import "../css/Malumot.css"
import { FiShoppingCart  } from 'react-icons/fi';
import {  BsCreditCard } from 'react-icons/bs';
import { TbCar } from 'react-icons/tb';
import { BsClock } from 'react-icons/bs';
import Malumot from '../mock/Malumot';
function Home_malumot() {
  return (
    
      <div className="Malumot_container">
         
         <div className="malumot_card1">
            <div className="icons">
            <FiShoppingCart />
            </div>
          <div className="malumot_card1_button">
          {Malumot.map((i) => (
          <div className='malumot_card1_button'  key={i.id1}>
    <h2 className='link-item2'>{i.name1}</h2>            
    <p className='link-item2'>{i.title1}</p>
         </div>
        ))} 
          </div>
         </div>
         <div className="malumot_card2">
          <div className="icons">
          <BsCreditCard />
          </div>
          {Malumot.map((q) => (
          <div className='malumot_card2_button'  key={q.id2}>
    <h2 className='link-item2'>{q.name2}</h2>            
    <p className='link-item2'>{q.title2}</p>
         </div>
        ))} 
         </div>
         <div className="malumot_card3">
         <div className="icons">
         <TbCar />
</div>
{Malumot.map((a) => (
          <div className='malumot_card3_button'  key={a.id3}>
    <h2 className='link-item2'>{a.name3}</h2>            
    <p className='link-item2'>{a.title3}</p>  
         </div>
        ))} 
         </div>
         <div className="malumot_card4">

        <div className="icons">
        
        <BsClock />
          </div>
          {Malumot.map((e) => (
          <div className='malumot_card4_button'  key={e.id4}>
    <h2 className='link-item2'>{e.name4}</h2>            
    <p className='link-item2'>{e.title4}</p>  
         </div>
        ))} 
      </div>
      </div> 
    
  )
}

export default Home_malumot
