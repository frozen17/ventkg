import React, { createRef, useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "../../slick/slick.css";
import "../../slick/slick-theme.css";
import "./Object.scss";
import { Fab , Box} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PocketBase from 'pocketbase';
import { useTranslation } from "react-i18next";
import urlData from '../../url.json'
import axios from 'axios';

const Object = () => {
  const sliderRef = useRef(null);


  const [objects, setObjects] = useState([])
  const [page, setPage] = useState(1);
  const [language, setLanguage] = useState("")


const {t} = useTranslation()


  const getData = async () => {
    try{
      await axios.get(`http://192.168.88.167/wp-json/wp/v2/objects?per_page=100`).then(res => setObjects(res.data))
    }
	   catch(error){
      console.log(error)
     }
       
   }

   useEffect(() => {
      getData();
   }, [])





  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const next = () =>{
    sliderRef.current?.slickNext();
  }
  const prev = () =>{
    sliderRef.current?.slickPrev();
  }
  return (
    <div className="main-click-slider">
      <h2>{t("objects")}</h2>

    <Box sx={{position:"relative"}}>

        <Fab sx={{position:"absolute", zIndex:"2",left:"-20px",float:"left",top:"140px", backgroundColor: "#FF800F", color: "#fff", hover: "black"}} onClick={prev}>
            <ArrowBackIosNewIcon/>
        </Fab>

        <Fab sx={{position:"absolute", zIndex:"2",right:"-20px",float:"right",top:"140px", backgroundColor: "#FF800F", color: "#fff"}} onClick={next}>
            <ArrowForwardIosIcon/>
        </Fab>
      <Slider {...settings} ref={sliderRef}>
        {objects?.map((obj) => (
          <div className="flip-obj wow fadeInLeft" key={obj.id}>
            <div
            className="front"
            style={{background: `url(${obj.acf.img}) center / cover no-repeat`}}
          >
           
          </div>
          <div className="footer">
                <div className="obj-title">
                      <h4 className="obj-text">{(localStorage.getItem('language') == '"kgz"' && obj.acf.kg_title)}</h4>
                      <h4 className="obj-text">{(localStorage.getItem('language') == '"en"' && obj.acf.en_title )}</h4>
                      <h4 className="obj-text">{(localStorage.getItem('language') == '"ru"' && obj.acf.ru_title)}</h4>
                </div>
                
            </div>
          </div>
        ))}        
      </Slider>

      

      </Box>
    </div>
  );
};

export default Object;
