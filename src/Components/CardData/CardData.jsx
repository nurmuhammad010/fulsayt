import React from "react";
import CardDataapi from "../../Data/CardData/CardData1";
import "./Getdata.css"
import {SlLike} from "react-icons/sl"
import {MdOutlineVerticalAlignBottom} from "react-icons/md"
import {GiReceiveMoney} from "react-icons/gi"
import {IoIosReturnLeft} from "react-icons/io"
import {RxTextAlignBottom} from "react-icons/rx"
import { Link } from "react-router-dom";
function CardData() {
  return (
   <div className="cardcontainer1">
    <div className="cardcontainer">
      <div className="card-content">
        {CardDataapi.map((i) => (
          <div className="cards1" key={i.id}>
            <img src={i.image} alt="" />
            <div className="carddata-type">
             <span><p style={{color:"black"}}><RxTextAlignBottom/></p>{i.text5}</span>
            <span> <p><SlLike/></p> {i.text1}</span>
            <span> <p><MdOutlineVerticalAlignBottom/></p> {i.text2}</span>
            <span> <p><GiReceiveMoney/></p> {i.text3}</span>
            <span> <p><IoIosReturnLeft/></p> {i.text4}</span>
            <button className="btn-card-data">
            <Link to={i.link} key={i.id}>
                <div className="get-data-text">
                  <span className="card-data-text">{i.linktext}</span>
                </div>
            </Link>
            </button>
            </div>
          </div>
          
        ))}
      </div>
    </div>
    </div>
  );
}
export default CardData;