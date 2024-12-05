import React from 'react'
import Ilova1 from '../mock/Ilova'
import '../css/Ilova.css'
import {  BsGooglePlay  } from  "react-icons/bs"
function Ilova() {
  return (
    <div className="Ilova">
    <div className='Ilova_container'>
          {Ilova1.map((i) => (
          <div className='Ilova_type'  key={i.id1}>
    <h2 className='link-item2'>{i.name1}</h2>            
    <p className='link-item2'>{i.title1}</p>
         </div>
        ))} 
    {Ilova1.map((e) => (
          <div className='Ilova_img'  key={e.id2}>
<img src={e.image2} alt="" />
         </div>
        ))} 
        <div className="Ilova_right">
            <a href="https://play.google.com/store/apps/details?id=uz.ibroxim.mahsulot&hl=nl&gl=US&pli=1"><button className='A'> <BsGooglePlay /> Google play</button></a>
        </div>
    </div>
    </div>
  )
}

export default Ilova
