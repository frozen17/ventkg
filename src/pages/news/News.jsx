import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "../../slick/slick.css";
import "../../slick/slick-theme.css";
import "./News.scss";
import { Fab, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PocketBase from "pocketbase";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import urlData from "../../url.json";
import { HOME_ROUTE } from "../../utils/Consts";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import axios from 'axios';




const News = () => {
  const [news, setNews] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [selectedNews, setSelectedNews] = useState([])
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const {t} = useTranslation()



  const handleClickOpen = (id, foto, ru_title, en_title, kgz_title, ru_descr, en_descr, kgz_descr) => {
    setOpen(true);
    setSelectedNews([id, foto, ru_title, en_title, kgz_title, ru_descr, en_descr, kgz_descr])
  };

  const handleClose = () => {
    setOpen(false);
  };


  const getData = async () => {
    await axios.get('http://192.168.88.167/wp-json/wp/v2/news?per_page=100').then(res => setNews(res.data))
  };

  useEffect(() => {
    getData();
  }, []);

  const sliderRef = useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
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

  const next = () => {
    sliderRef.current?.slickNext();
  };
  const prev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="news">
      <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                        component={'div'}
                      >
                        <DialogTitle  id="responsive-dialog-title">
                        {localStorage.getItem('language') == '"ru"' && selectedNews[1]}
                        {localStorage.getItem('language') == '"en"' && selectedNews[2]}
                        {localStorage.getItem('language') == '"kgz"' && selectedNews[3]}
                        </DialogTitle>
                        <DialogContent component={'div'}>
                          <DialogContentText component={'div'}>
                            <div style={{
                              display: 'flex', justifyContent: 'center', width: "85%",  height: "25vh", margin: "15px auto"
                            }}>
                              <img src={selectedNews[4]} alt="" />
                            </div>
                          
                          <DialogContentText className="selected-descr">
                            {localStorage.getItem('language') == '"ru"' && selectedNews[5]}
                            {localStorage.getItem('language') == '"en"' && selectedNews[6]}
                            {localStorage.getItem('language') == '"kgz"' && selectedNews[7]}
                          </DialogContentText>
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions component={'div'}>
                          <Button onClick={handleClose} autoFocus>
                            Назад
                          </Button>
                        </DialogActions>
                      </Dialog>
      <h2 className="news-news">{t("news")}</h2>
      <Box sx={{ position: "relative" }}>
        <Fab
          sx={{
            position: "absolute",
            zIndex: "2",
            left: "5px",
            float: "left",
            top: "180px", backgroundColor: "#FF800F", color: "#fff"
          }}
          onClick={prev}
        >
          <ArrowBackIosNewIcon />
        </Fab>

        <Fab
          sx={{
            position: "absolute",
            zIndex: "2",
            right: "-20px",
            float: "right",
            top: "180px", backgroundColor: "#FF800F", color: "#fff"
          }}
          onClick={next}
        >
          <ArrowForwardIosIcon />
        </Fab>
        <Slider {...settings} ref={sliderRef}>
          {news?.map((e) => (
            <div key={e.id} className="example-2 news-card wow fadeInLeft">
              <div
                className="news-wrapper"
                style={{
                  background: `url(${(e.acf.foto)}) center / cover no-repeat`,
                }}
              >
                <div className="news-data">
                  <div className="news-content">
                    <span className="news-author">By Ventstroy</span>
                    <h1 className="news-title" onClick={() => handleClickOpen(e.id, e.acf.ru_title, e.acf.en_title, e.acf.kgz_title, e.acf.foto, e.acf.ru_descr, e.acf.en_descr, e.acf.kgz_descr)}>{localStorage.getItem('language') == '"ru"' && e.acf.ru_title}</h1>
                    <h1 className="news-title" onClick={() => handleClickOpen(e.id, e.acf.ru_title, e.acf.en_title, e.acf.kgz_title, e.acf.foto, e.acf.ru_descr, e.acf.en_descr, e.acf.kgz_descr)}>{localStorage.getItem('language') == '"en"' && e.acf.en_title}</h1>
                    <h1 className="news-title" onClick={() => handleClickOpen(e.id, e.acf.ru_title, e.acf.en_title, e.acf.kgz_title, e.acf.foto, e.acf.ru_descr, e.acf.en_descr, e.acf.kgz_descr)}>{localStorage.getItem('language') == '"kgz"' && e.acf.kgz_title}</h1>

                    <Link to="#" onClick={() => handleClickOpen(e.id, e.acf.ru_title, e.acf.en_title, e.acf.kgz_title, e.acf.foto, e.acf.ru_descr, e.acf.en_descr, e.acf.kgz_descr)} className="news-button">
                    read
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          
        </Slider>
      </Box>
    </div>
  );
};

export default News;
