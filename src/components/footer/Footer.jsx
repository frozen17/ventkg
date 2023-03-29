import React, { useState, useEffect }  from 'react';
import logo from "../../logo.svg";
import './Footer.css'
import '../../bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { ABOUT_ROUTE, SERVICES_ROUTE } from '../../utils/Consts'



const Footer = () => {

  const [ icons, setIcons] = useState(null)
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

  const getIconData = async () => {
    try {
      await axios
        .get(`http://192.168.88.167/wp-json/wp/v2/social_media`)
        .then(res => setIcons(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    getIconData();
  }, [])



    return (
        <div
        className="container-fluid bg-dark footer mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">


          <div className="col-lg-3 col-md-6">
<img src={logo} alt="" className="img-fluid me-3"  style={{width: "200px"}}/>

          {identity?.map((identity) => (
            <span key={identity.id}>
                {localStorage.getItem('language') == '"ru"' && identity.acf.ru_slogan}
                {localStorage.getItem('language') == '"en"' && identity.acf.en_slogan}
                {localStorage.getItem('language') == '"kgz"' && identity.acf.kgz_slogan}
            </span>
          ))}


            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">{t("footer-contact")}</h5>
              <p>
                <i className="fa fa-map-marker-alt me-3"></i>{identity?.map((identity) => (identity.acf.address))}
              </p>
              <p>
                <i className="fa fa-phone-alt me-3"></i>{identity?.map((identity) => (identity.acf.number))}
              </p>
              <p>
                <i className="fa fa-envelope me-3"></i>{identity?.map((identity) => (identity.acf.email))}
              </p>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">{t("footer-links")}</h5>
              <Link className="btn btn-link" to={ABOUT_ROUTE}>
                {t("footer-links-one")}
              </Link>
              <a className="btn btn-link" href="#contactUs">
                {t("footer-links-two")}
              </a>
              <Link className="btn btn-link" to={SERVICES_ROUTE}>
                {t("footer-links-three")}
              </Link>
              <a className="btn btn-link" href="#ourservices">
              {t("footer-links-four")}
              </a>
            </div>
            <div className="col-lg-3 col-md-6 mx-auto">
              <h5 className="text-light mb-4">{t("footer-links-social")}</h5>
              <div className="d-flex">
                {icons?.map((icon) => (
                  <ul key={icon.id} className="h-100 d-lg-inline-flex align-items-center">
                    <li>
                      <a
                        className="btn btn-square rounded-circle bg-light text-primary me-2"
                        to={icon.acf.icon_url}
                      >
                        <i className={icon.acf.icon} aria-hidden="true"></i>
                      </a>
                    </li>


                  </ul>
                ))}

              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              Copyright &copy; ОсОО «Вентстрой»
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;