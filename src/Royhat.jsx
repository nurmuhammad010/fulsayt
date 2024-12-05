import React from 'react'
import { Link } from "react-router-dom";
import ROYHAT_IKKI from "./mock/ROYHAT_IKKI"
import ROYHAT_BIR from "./mock/ROYHAT_BIR"
import { FaTiktok } from "react-icons/fa"
import { AiOutlineUser } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import "./css/Royhat.css"
export default function Royhat() {
  return (
    <div className='Royhat'>
      <div className="Royhat_header">
      {ROYHAT_BIR.map((i) => (  
         <i className='link-item'>{i.title}</i>
        ))}
        <div className="Royhat_header_navlist">
      <div className="Royhat_header_asosiy">  {ROYHAT_BIR.map((i) =>(
           <Link to={i.link22} key={i.id1}>
         
           <h2 className='link-item12'>{i.title1}</h2>
           </Link>
        ))}
        </div>
           <div className="Royhat_header_biz">{ROYHAT_BIR.map((i) =>(
           <Link to={i.link2} key={i.id2}>
         
           <h2 className='link-item12'>{i.title2}</h2>
           </Link>
        ))}
        </div>
        <div className="Royhat_header_savatcha">
           {ROYHAT_BIR.map((i) =>(
           <Link to={i.link3} key={i.id3}>
           <h2 className='link-item12'>{i.title3}</h2>
           </Link>
        ))}
        </div>
        <div className="Royhat_header_aloqa">
         <a href="https://t.me/Nurmuhammad_0917">{ROYHAT_BIR.map((i) => (  
         <i className='link-item12'>{i.title4}</i>
         
        ))}

        </a>
        </div>
        </div>
        <div className="Royhat_header_icon">
         <AiOutlineUser />
        </div>
      </div>
      <div className="Royhat_container">
          <div className="Royhat_container_card">
            <div className="Royhat_container_card_icon">
            {ROYHAT_IKKI.map((i) => (  
         <i className='link-item'>{i.title}</i>
        ))}
        <div className="container_card_icon1">
      <FaTiktok />
      <BsInstagram />
      <BsTelegram />
        </div>
            </div>
            {ROYHAT_IKKI.map((i) =>(
           <Link to={i.link33} key={i.id1}>
           <h3 className='link-item'>{i.title1}</h3>
           </Link>
        ))}
        <div className="Royhat_container_card_input">
        <BsTelephoneFill />
        <input type="number" placeholder='+998' id='input'/>
        </div>
        <div className="Royhat_container_card_qoida">
          <BsFillChatLeftTextFill />
          <input type="checkbox" name="" id="" />
          <p>Men qoidalar bilan tanishdim</p>
        </div>
        <button>Yuborish</button>
        <p>Maxsus parol orqali kirish</p>
          </div>
      </div>
     
    </div>
  )
}
