import React, { useState, useEffect } from 'react';
import "./Offer.css";
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const Offer = () => {
    const [ offers, setOffers] = useState(null)


    const getData = async () => {
        try {
          await axios.get(`http://192.168.88.167/wp-json/wp/v2/offer`).then(res => setOffers(res.data))
        }
        catch (error) {
          console.log(error)
        }
    
      }
    
      useEffect(() => {
        getData();
      }, [])

    const {t} = useTranslation()
    return (
        <div>
            <section className="what-we-offer section-box" id='offer'>
            <div className="container">
                {/* <!-- Heading Section --> */}
                <div className="row">
                    <div className="col-12">
                        <h2 className="wow fadeInLeft">{t("services")}</h2>
                    </div>  
                </div>  
                {/* <!-- Offer --> */}
                <div className="row">
                    {/* <!-- Offer 1 --> */}

                    {offers?.map((offer) => (
                     <div key={offer.id} className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 wow fadeInLeft">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 order-number-2">
                                <div className="offer-text text-right">
                                    <h4>
                                            {localStorage.getItem('language') == '"ru"' && offer.acf.ru_offer}
                                            {localStorage.getItem('language') == '"en"' && offer.acf.en_offer}
                                            {localStorage.getItem('language') == '"kgz"' && offer.acf.kgz_offer}
                                    </h4>
                                    <p>
                                            {localStorage.getItem('language') == '"ru"' && offer.acf.ru_descr}
                                            {localStorage.getItem('language') == '"en"' && offer.acf.en_descr}
                                            {localStorage.getItem('language') == '"kgz"' && offer.acf.kgz_descr}
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 order-number-1">
                                <div className="offer-image">
                                    <img src={offer.acf.img} alt="offer1"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}






                </div>  
                {/* <!-- End Offer   -->             */}
            </div>
        </section>
        </div>
    );
};

export default Offer;