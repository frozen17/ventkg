import React, { useState, useEffect } from "react";
import "./OurServices.css";
import { useTranslation } from "react-i18next";
import axios from 'axios';

const OurServices = () => {
  const [services, setServices] = useState(null)





  const getData = async () => {
    try {
      await axios.get(`http://192.168.88.167/wp-json/wp/v2/advantages`).then(res => setServices(res.data))
    }
    catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getData();
  }, [])


  const { t } = useTranslation();
  return (
    <div id="ourservices">
      <div className="feat bg-gray pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="section-head col-sm-12">
              <h4>
                <span>{t("choose-us")}</span> {t("choose-us-us")}
              </h4>
            </div>

            {services?.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="0.1s">
                <div className="item">
                  {" "}
                  <span className="icon feature_box_col_one">
                    <i className={service.acf.icon}></i>
                  </span>
                  <h6>
                    {localStorage.getItem('language') == '"ru"' && service.acf.ru_advantages}
                    {localStorage.getItem('language') == '"en"' && service.acf.en_advantages}
                    {localStorage.getItem('language') == '"kgz"' && service.acf.kgz_advantages}
                  </h6>
                  <p>
                    {localStorage.getItem('language') == '"ru"' && service.acf.ru_descr}
                    {localStorage.getItem('language') == '"en"' && service.acf.en_descr}
                    {localStorage.getItem('language') == '"kgz"' && service.acf.kgz_descr}
                  </p>
                </div>
              </div>
            ))}



          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
