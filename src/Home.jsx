import React from 'react'
import Card_aip_bir from './Components/Card_aip_bir';
import Header_Card from './Components/Header_Card';
import Home_header from './Components/home_header'
import Home_malumot from './Components/Home_malumot';
import Button_royhat from './Components/button_royhat';
import Ilova from './Components/Ilova';
import Footer from './Footer';
function Home() {
  return (
    <div>
      <Home_header />
      <Header_Card />
      <Home_malumot />
      <Card_aip_bir />
      <Button_royhat />
      <Ilova />
      <Footer />
    </div>
  )
}

export default Home;
