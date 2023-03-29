import React, { createRef, useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import './Transport.css'
import axios from 'axios';
  import IconButton from '@mui/material/IconButton';

  import MenuIcon from '@mui/icons-material/Menu';

const Transport = () => {

  const [aboutus, setAboutus] = useState(null)
  const [language, setLanguage] = useState("")





  const getData = async () => {
      await axios.get('http://192.168.88.167/wp-json/wp/v2/aboutus?per_page=100').then(res => setAboutus(res.data))

  }

  useEffect(() => {
      getData();
  }, [])


  return (
    <div>
      <div className="section paddinf-off tmm-team container-xxl py-5">
      <div className="fadeInUp " >
      <ol className="cards__container" title="Blog entries"/>
      {aboutus?.filter(abt => abt.acf.vybor == "1img").map((abt) => (
      <li className="card1"  key={abt.id} style={{margin: "30px"}}>
        <div className="card1__thumb wow fadeInLeft"><img className="animate" src={abt.acf.image}/></div>
        <div className="card1__content wow fadeInLeft" >
          <h3 className="card2__title">                           
           {(localStorage.getItem('language') == '"kgz"' && abt.acf.namekg)}
           {(localStorage.getItem('language') == '"en"' && abt.acf.nameen )}
           {(localStorage.getItem('language') == '"ru"' && abt.acf.nameru)}</h3>
          <p className="card2__text">
          {(localStorage.getItem('language') == '"kgz"' && abt.acf.titlekg)}
           {(localStorage.getItem('language') == '"en"' && abt.acf.titleen )}
           {(localStorage.getItem('language') == '"ru"' && abt.acf.titleru)}</p>
        </div>
      </li>))}
      {aboutus?.filter(abt => abt.acf.vybor == "2img").map((abt) => (
      <li className="card2"  key={abt.id}  style={{margin: "30px"}}>
        <div className="card1__thumb wow fadeInRight"><img className="animate" src={abt.acf.image}/></div>
        <div className="card2__content wow fadeInRight">
          <h3 className="card2__title">           
          {(localStorage.getItem('language') == '"kgz"' && abt.acf.namekg)}
           {(localStorage.getItem('language') == '"en"' && abt.acf.nameen )}
           {(localStorage.getItem('language') == '"ru"' && abt.acf.nameru)}</h3>
          <p className="card2__text">          
          {(localStorage.getItem('language') == '"kgz"' && abt.acf.titlekg)}
           {(localStorage.getItem('language') == '"en"' && abt.acf.titleen )}
           {(localStorage.getItem('language') == '"ru"' && abt.acf.titleru)}</p>
        </div>
      </li>))}

    </div>
    </div>
    
    </div>
  );
};

export default Transport;