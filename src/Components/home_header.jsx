import React from 'react'
import { CiMail } from 'react-icons/ci';
import "../css/home_header1.css"
import { BiMenuAltLeft } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineTeam } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import NavbarData from "../mock/NavbarData"
import { Link } from "react-router-dom";
import Logo from '../mock/logo';
import Menu from  '../mock/menu';
import Scrol from './scrol';
import CardData from './CardData/CardData';
import Bizlar from "../mock/biz"
import Royhat_button from "../mock/royhat_button"
function Home_header() {
  return (
    <div className='home_header'>
     <div className="navigator">
      <div className="navigator_logo">
      <ul className="linklar">
            {NavbarData.map((i) => (
              <Link to={i.link} key={i.id}>
                <li className="link-item">{i.name}</li>
              </Link>
            ))}
          </ul>
      </div>
      
      <div className="navigator_navlist">
<a href="#"><h2 id='icon'><CiMail /> </h2></a>
<a href="#"> <h2 id='email'>info@mahsulot.com </h2></a>
      </div>
     </div>
     <div className="navbar">
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
  
  
  <div className="menu">
         
          <details class="dropdown">
            <summary role="button">
                <span> <BiMenuAltLeft /></span>
            </summary>
            <ul>
            
       <ul className="linklar">
        {Menu.map((i) => (
          <Link to={i.link} key={i.id}>
            <li className="link-item">{i.title}</li>
          </Link>
        ))}
      </ul>
    
            </ul>
          </details>
          <h3>Kategoriya</h3>

        </div>
        <div className="input_sorch">
          <input type="text" placeholder='Qidiruv' className='input' />
         <button className='search'> <AiOutlineSearch /></button>
        </div>
            <div className="navlist_aloqa">
              <div className="Bosh_sahifa">
                <div className="Bosh_sahifa_icon">
                 <AiOutlineHome />
                </div>
                <p>Bosh Sahifa</p>
              </div>
              <div className="boglanish_icon">
               <div className="boglanish_icon_icons">
               <a href="https://t.me/Nurmuhammad_0917">
           <BsFillTelephoneFill />
             </a>
               </div>
               <p>biz blina boglanish</p>
              </div>
              <div className="bizhaqimizda_malumot">
              <div className="bizhaqimizda_malumot_icon">
              {Bizlar.map((i) => (   
          <Link to={i.link} key={i.id}>
           <AiOutlineTeam />
          </Link>
        ))}
        </div>
        <p>bizhaqimizda_malumot</p>
              </div>
              <div className="kirish">
             <div className="kirish_icon">
              {Royhat_button.map((e) => (
                <Link to={e.link} key={e.id}>
             <AiOutlineUser />
                </Link>
              ))}
             
             </div>
          <p>kirish</p>
              </div>
            </div>
        </div>
        <div className='container'>
        <div className="header_left">
          <Scrol />
        </div>
        <div className="header_right1">
          <CardData />
        </div>
        </div>


    </div>
  )
}

export default Home_header
