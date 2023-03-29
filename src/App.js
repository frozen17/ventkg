import { useState } from "react";
import "./bootstrap.min.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";
import { ABOUT_ROUTE, CARD_ROUTE, HOME_ROUTE, NOT_FOUND, OBJECTS_ROUTE, SERVICES_ROUTE } from "./utils/Consts";
import HeaderStart from "./pages/HeaderStart/HeaderStart";
import TopBar from "./components/topbar/TopBar";
import Slider from "./components/slider/Slider";
import Card from "./components/card/Card";
import PreLoader from "./pages/PreLoader/PreLoader2";
import {useEffect} from 'react';
import './App.css';
import Object from "./pages/obj/Object";
import OurServices from "./pages/services/OurServices";
import Offer from "./pages/offer/Offer";
import NewsDetailed from "./pages/news/newsDetailed/NewsDetailed";
import AboutUs from './pages/aboutus/AboutUs'

function App() {

  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true);

    const timeoutId=setTimeout(()=>{
      setLoading(false);
    },3000);

    return ()=>{
      clearTimeout(timeoutId);
    }
  },[]);
 

  return loading?<PreLoader />:(
    <div className="App">

      <Header />
      
      
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={NOT_FOUND} element={<NotFound />} />
        <Route path={ABOUT_ROUTE} element={<HeaderStart />} />
        <Route path={CARD_ROUTE} element={<Card/>}/>
        <Route path={OBJECTS_ROUTE} element={<Object/>}/>
        <Route path={SERVICES_ROUTE} element={<Offer/>}/>
        <Route path={`/news/:id`} element={<NewsDetailed/>}/>
      </Routes>
      <Footer />
      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
  );
}


export default App;
