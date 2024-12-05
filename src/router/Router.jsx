import React from 'react'
import { Route, Routes } from "react-router-dom";
import Biz from "../Biz_Haqimmizda"
import Home from '../Home';
import Royhat from '../Royhat';
import Info from "../Aloqa"
import Avto from "../Avto"
import Ayollar from "../Ayolllar"
import Bolalar from '../Bolalar';
import Erkaklar from '../Erkaklar';
import Kitoblar from '../Kitoblar';
import Mahsulotlar from '../Mahsulotlar';
import MedTexnika from '../MedTexnika';
import Sogalar from '../Sogalar';
import Telfonlar from '../Telfonlar';
import UyHovliUchun from '../UyHovliUchun';
import Wacht from '../Wacht';
import CardPage from '../Components/CardData/CardDataPage/CardPage';
import Header_Card from '../Components/Header_Card';
import B1 from '../Components/A/B1';
import B2 from '../Components/A/B2';
import B3 from '../Components/A/B3';
import B4 from '../Components/A/B4';
import B5 from '../Components/A/B5';
import B6 from '../Components/A/B6';
import B7 from '../Components/A/B7';
import B8 from '../Components/A/B8';
import B9 from '../Components/A/B9';
import B10 from '../Components/A/B10';
import B11 from '../Components/A/B11';
import B12 from '../Components/A/B12';
import B13 from '../Components/A/B13';
import B14 from '../Components/A/B14';
import B15 from '../Components/A/B15';
export default function Router() {
  return (
    <div>
  <Routes>
        <Route index element={<Home />} />
        <Route path="/Biz" element={<Biz />} />
        <Route path="/Royhat" element={<Royhat />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Avto" element={<Avto />} />
        <Route path="/Ayollar" element={<Ayollar />} />
        <Route path="/Bolalar" element={<Bolalar />} />
        <Route path="/Erkaklar" element={<Erkaklar />} />
        <Route path="/Kitoblar" element={<Kitoblar />} />
        <Route path="/Mahsulotlar" element={<Mahsulotlar />} />
        <Route path="/MedTexnika" element={<MedTexnika />} />
        <Route path="/Sogalar" element={<Sogalar />} />
        <Route path="/Telfonlar" element={<Telfonlar />} />
        <Route path="/UyHovliUchun" element={<UyHovliUchun />} />
        <Route path="/Wacht" element={<Wacht />} />
        <Route path="/CardPageData" element={<CardPage/>}/>
        <Route path="/CardPage" element={<CardPage/>}/>
        <Route path="/Sotib_olish" element={<Header_Card/>}/>
        <Route path="/exit" element={<Home/>}/>
        <Route path="/B1" element={<B1/>}/>
        <Route path="/B2" element={<B2/>}/>
        <Route path="/B3" element={<B3/>}/>
        <Route path="/B4" element={<B4/>}/>
        <Route path="/B5" element={<B5/>}/>
        <Route path="/B6" element={<B6/>}/>
        <Route path="/B7" element={<B7/>}/>
        <Route path="/B8" element={<B8/>}/>
        <Route path="/B9" element={<B9/>}/>
        <Route path="/B10" element={<B10/>}/>
        <Route path="/B11" element={<B11/>}/>
        <Route path="/B12" element={<B12/>}/>
        <Route path="/B13" element={<B13/>}/>
        <Route path="/B14" element={<B14/>}/>
        <Route path="/B15" element={<B15/>}/>
      </Routes>
    </div>
  )
}
