import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "../../App.css";
import AboutUs from "../aboutus/AboutUs";
import Card from "../../components/card/Card";
import { useTranslation } from "react-i18next";
import Slider from "../../components/slider/Slider";
import OurServices from "../services/OurServices";
import Offer from "../offer/Offer";
import Contact from "../contact/Contact";
import Object from "../obj/Object";
import News from "../news/News";
import axios from 'axios'

const Home = () => {

  const [mainpage, setMainpage] = useState([])


  const getData = async () => {
    try{
      await axios.get(`http://192.168.88.167/wp-json/wp/v2/mainpage?per_page=100`).then(res => setMainpage(res.data))
    }
	   catch(error){
      console.log(error)
     }
       
   }

   useEffect(() => {
      getData();
   }, [])


  const { t } = useTranslation();

  return (
    <div className="main-page">
      <div className="container-fluid p-0 mb-5">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">


            {mainpage?.map((main) => (

              <div key={main.id} className={main.id == 227? "carousel-item active" : "carousel-item"}>
                <img  
                  className="main-image"
                  style={{
                    backgroundImage: "cover",
                    backgroundRepeat: "no-repeat",
                    background: "no-repeat center"
                  
                  }}
                  src={main.acf.img}
                  alt="Image"
                />
                <div className="carousel-caption">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-7 pt-5">
                        <h1 className="display-4 text-white mt-4 animated slideInDown">
                          {localStorage.getItem('language') == '"ru"' && main.acf.ru_title}
                          {localStorage.getItem('language') == '"en"' && main.acf.en_title}
                          {localStorage.getItem('language') == '"kgz"' && main.acf.kgz_title}
                        </h1>
                        <p className="fs-5 text-body mb-4 pb-2 mx-sm-5 animated slideInDown">
                          {localStorage.getItem('language') == '"ru"' && main.acf.ru_descr}
                          {localStorage.getItem('language') == '"en"' && main.acf.en_descr}
                          {localStorage.getItem('language') == '"kgz"' && main.acf.kgz_descr}
                        </p>
                        <a href="https://wa.me/996772517826">
                          <button className="main-btn">{t("main-btn")}</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        ))}        





            {/* <div className="carousel-item active" >
              <img
                className="main-image"
                src="assets/img/main-page-2.jpg"
                alt="Image"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-4 animated slideInDown">
                        {t("main-four")}
                      </h1>
                      <p className="fs-5 text-body mb-4 pb-2 mx-sm-5 animated slideInDown">
                        {t("main-four-un")}
                      </p>
                      <a href="https://wa.me/996772517826">
                        <button className="main-btn">{t("main-btn")}</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}



            {/* <div className="carousel-item">
              <img
                className="main-image"
                src="assets/img/main-page-3.jpg"
                alt="Image"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-4 animated slideInDown">
                        {t("main-one")}
                      </h1>
                      <p className="fs-5 text-body mb-4 pb-2 mx-sm-5 animated slideInDown">
                        {t("main-one-un")}
                      </p>
                      <a href="https://wa.me/996772517826">
                        <button className="main-btn">{t("main-btn")}</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className="carousel-item ">
              <img
                className="main-image"
                src="assets/img/main-page-4.jpg"
                alt="Image"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-4 animated slideInDown">
                        {t("main-two")}
                      </h1>
                      <p className="fs-5 text-body mb-4 pb-2 mx-sm-5 animated slideInDown">
                        {t("main-two-un")}
                      </p>
                      <a href="https://wa.me/996772517826">
                        <button className="main-btn">{t("main-btn")}</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <AboutUs />
      <Object />
      <OurServices />
      <Offer />
      <News/>

      <Contact />
      <Slider />
    </div>
  );
};

export default Home;
