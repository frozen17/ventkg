import React, { useState, useEffect }  from "react";
import i18n from "../../i18n";
import { Link } from "react-router-dom"; 
import { useTranslation } from "react-i18next";
import { Button } from "bootstrap";
import useLocalStorage from '../../hooks/use-localstorage';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './TopBar.css';
import '../../bootstrap.min.css'
import axios from 'axios';




const TopBar = () => {
  const [ identity, setIdentity] = useState(null)
  const {t} = useTranslation()


  

  const getData = async () => {
    try {
      await axios.get(`http://192.168.88.167/wp-json/wp/v2/personal_data`).then(res => setIdentity(res.data))
    }
    catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getData();
  }, [])

  const [language, setLanguage] = useLocalStorage('language', 'ru')


  const handleChangeLanguage = (language, e) => {
  i18n.changeLanguage(language)
  }


  return (
    <div className=" topbar container-fluid text-white-50 py-2 px-5 d-none d-lg-block">
      <div className="row gx-0 align-items-center">
        <div className="col-lg-7 px-5 text-start">
          <div className="h-100 d-inline-flex align-items-center me-4">
            <small className="fa fa-phone-alt me-2"></small>
            <small><a href="tel:+996772517826" className="text-white-50 ">{identity?.map((identity) => (identity.acf.number))}</a></small>
          </div>
          <div className="h-100 d-inline-flex align-items-center me-4">
            <small className="far fa-envelope-open me-2"></small>
            <small><a href="mailto:syrdybaev@bk.ru" className="text-white-50">{identity?.map((identity) => (identity.acf.email))}</a></small>
          </div>
        </div>

        <div className="col-lg-5 px-5 text-end">

        <div className="chooseLngTop">

<MenuItem style={{border: "2px solid rgb(241, 230, 230)", borderRadius: "5px", marginRight: "5px", color: "#fff"}} className="lng" onClick={() => handleChangeLanguage('en', setLanguage('en'))} value={'en'}><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png" className="imgLng" alt="" /> EN</MenuItem>
<MenuItem style={{border: "2px solid rgb(241, 230, 230)", borderRadius: "5px", marginRight: "5px", color: "#fff"}} onClick={() => handleChangeLanguage('ru', setLanguage('ru'))} value={'ru'}><img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png"  className="imgLng" alt="" /> RU</MenuItem>
<MenuItem style={{border: "2px solid rgb(241, 230, 230)", borderRadius: "5px", marginRight: "5px", color: "#fff"}} onClick={() => handleChangeLanguage('kgz', setLanguage('kgz'))} value={'kgz'}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1200px-Flag_of_Kyrgyzstan.svg.png" className="imgLng" alt="" /> KGZ</MenuItem>
</div>
        </div>

      </div>
      
    </div>
  );
};

export default TopBar;
