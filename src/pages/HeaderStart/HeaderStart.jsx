import React from 'react'
import './HeaderStart.css'
import '../../App.css';
import AboutUs from '../aboutus/AboutUs';
import TeamStart from '../TeamStart/TeamStart';
import Transport from '../transport/Transport';
import { useTranslation } from 'react-i18next';
import Card from '../../components/card/Card';

const HeaderStart = () => {
    const {t} = useTranslation()
    return (
        <div>
        <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <h1 className="display-4 text-white animated slideInDown mb-4">{t("aboutus")}</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                </ol>
            </nav>
        </div>
    </div> 
    <AboutUs/>
    <Transport/>
    <TeamStart/>

    </div>
    )
}
export default HeaderStart