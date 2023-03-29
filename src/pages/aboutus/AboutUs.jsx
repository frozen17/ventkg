import React, { createRef, useRef, useState, useEffect } from "react";
import '../../bootstrap.min.css';
import '../../App.css';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const AboutUs = () => {

    const [aboutus, setAboutus] = useState(null)
    const [language, setLanguage] = useState("")





    const getData = async () => {
        await axios.get('http://192.168.88.167/wp-json/wp/v2/aboutus?per_page=100').then(res => setAboutus(res.data))

    }

    useEffect(() => {
        getData();
    }, [])


    const {t} = useTranslation()

    return (
        <div className="container-xxl py-5" >

        <div className="container" style={{display: "flex", flexWrap: "wrap"}}>
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    
                    <div className="h-100">
                        
                        {aboutus?.map((abt) => (
                         <h4 key={abt.id} className="obj-text h4">
                            {(localStorage.getItem('language') == '"kgz"' && abt.acf.kg_title)}
                            {(localStorage.getItem('language') == '"en"' && abt.acf.en_title)}
                            {(localStorage.getItem('language') == '"ru"' && abt.acf.ru_title)}
                            </h4>
))}
<br/>
                      
                        <div className="row g-4 mb-4">
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center">
                                <div className="img2" >
                                    <img className="flex-shrink-0 me-3" src="assets/img/icon/icon-09-primary.png" alt="" />
                                    </div>
                                    <h5 className="mb-0">{t("about-expert")}</h5>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center">
                                <div className="img2">
                                    <img className="flex-shrink-0 me-3" src="assets/img/icon/icon-09-primary.png" alt=""/>
                                    </div>
                                    <h5 className="mb-0">{t("about-expert")}</h5>
                                </div>
                            </div>
                        </div>
                        {aboutus?.map((abt) => (
                        <p key={abt.id} className="mb-4">
                            {(localStorage.getItem('language') == '"kgz"' && abt.acf.opisanie_na_kyrgyzskom)}
                            {(localStorage.getItem('language') == '"en"' && abt.acf.opisanie_na_anglijskom )}
                            {(localStorage.getItem('language') == '"ru"' && abt.acf.opisanie_na_russkom)}
                            
                      </p>))}
                        <div className="border-top mt-4 pt-4">
                            <div className="row">
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-6" style={{display: "flex"}}>
                    
                    <div className="row g-3">
                        {aboutus?.filter(abt => abt.acf.select === "1фото").map((abt) => (
                        <div className="col-6 text-end" key={abt.id}>
                            <img className="img-fluid w-50 pt-3 wow zoomIn"  data-wow-delay="0.1s"  src={abt.acf.imgabout} style={{marginTop: "25%" }} />
                        </div>))}
                        {aboutus?.filter(abt => abt.acf.select === "2фото").map((abt) => (
                        <div className="col-6 text-start" key={abt.id}>
                            <img className="img-fluid w-100 wow zoomIn" data-wow-delay="0.3s" src={abt.acf.imgabout}/>
                        </div>))}
                        {aboutus?.filter(abt => abt.acf.select === "3фото").map((abt) => (
                        <div className="col-6 text-end" key={abt.id}>
                            <img className="img-fluid w-50 wow zoomIn" data-wow-delay="0.5s" src={abt.acf.imgabout}/>
                        </div>))}
                        {aboutus?.filter(abt => abt.acf.select === "4фото").map((abt) => (
                        <div className="col-6 text-start" key={abt.id}>
                            <img className="img-fluid w-75 wow zoomIn" data-wow-delay="0.7s" src={abt.acf.imgabout}/>
                        </div>))}
                    </div>
                </div>
            </div>
        </div>
    </div>

            
    )
}

export default AboutUs;