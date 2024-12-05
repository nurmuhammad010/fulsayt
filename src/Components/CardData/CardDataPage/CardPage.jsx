import React from "react";
import "./CardPage.css";
import CardPagee from "../../../Data/CardDataPage/CardPage";
import { Link } from "react-router-dom";
import { FcShipped } from "react-icons/fc";
import {ImExit} from "react-icons/im"
// import HomeData from "../../.././Home";

function CardPage() {
  return (
    <div className="CardPage">
      <div className="cardpage-box">
        {CardPagee.map((e) => (
          <div className="cardpageimg">
            <img src={e.images} alt="" />
            <div className="cardpagetext">
              <h1>{e.text1}</h1>
              <div className="span-cardpage">
                <h2>{e.text2}</h2>
              </div>
              <div className="span-cardpage1">
                <h3>{e.text3}</h3>
              </div>
              <div className="btn-card-end">
              <button className="btn-card-page">
                <Link to={e.link} key={e.id}>
                  <div className="get-page-text">
                    <span className="card-page-text">
                      {" "}
                      Buyurtma Bering{" "}
                      <p>
                        <FcShipped />
                      </p>
                    </span>
                  </div>
                </Link>
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>

          {CardPagee.map((e) => (
            <Link to={e.link22} key={e.id}>
              <button className="cardpageexit"><ImExit/></button>
            </Link>
          ))}
    </div>
  );
}

export default CardPage;