import React from 'react'

import A5 from "../A/A5"
import { Link } from "react-router-dom";
import { FcShipped } from "react-icons/fc"
import  { ImExit } from "react-icons/im"
function B5() {
  return (
    <div>
          <div className="CardPage">
      <div className="cardpage-box">
        {A5.map((e) => (
          <div className="cardpageimg">
            <img src={e.image} alt="" />
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

          {A5.map((i) => (
            <Link to={i.link22} key={i.id}>
              <button className="cardpageexit"><ImExit/></button>
            </Link>
          ))}
    </div>
  
    </div>
  )
}

export default B5
