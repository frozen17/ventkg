import React, { createRef, useRef, useState, useEffect } from "react";
import { Card } from 'react-bootstrap';
import Team from './Team';
import './TeamStart.css'
import axios from 'axios';

const TeamStart = props => {
    const [team, setTeam] = useState(null)
    const [language, setLanguage] = useState("")
    





    const getData = async () => {
        await axios.get('http://192.168.88.167/wp-json/wp/v2/team?per_page=100').then(res => setTeam(res.data))

    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            
          <div className="section paddinf-off tmm-team wow fadeInRight" >
           {team?.map((team) => ( <h2 className="title-1" key={team.id}>{(localStorage.getItem('language') == '"kgz"' && team.acf.sub_title_kg)}
                            {(localStorage.getItem('language') == '"en"' && team.acf.sub_title_en )}
                            {(localStorage.getItem('language') == '"ru"' && team.acf.sub_title_ru)}</h2>))}
            <div data-wow-delay="0.5s"></div>
            
            <section className="tmm-container"  >
                <div className="tmm-row" >
                     {team?.map((team) => (
                    <div className="item-circled">
                   
                        <div className="face-container">
                            <div className="face"><img src={team.acf.kartinka} alt="" /></div>
                        </div>
                        <div className="item-content" >
                            <div className="title">
                                <h3>                            
                            {(localStorage.getItem('language') == '"kgz"' && team.acf.namekg)}
                            {(localStorage.getItem('language') == '"en"' && team.acf.nameen )}
                            {(localStorage.getItem('language') == '"ru"' && team.acf.nameru)}</h3>
                                <h4>                            
                            {(localStorage.getItem('language') == '"kgz"' && team.acf.rolekg)}
                            {(localStorage.getItem('language') == '"en"' && team.acf.roleen )}
                            {(localStorage.getItem('language') == '"ru"' && team.acf.roleru)}</h4></div>
                            <p>                            
                            {(localStorage.getItem('language') == '"kgz"' && team.acf.opisanie_na_kyrgyzskom)}
                            {(localStorage.getItem('language') == '"ru"' && team.acf.opisanie_na_russkom )}
                            {(localStorage.getItem('language') == '"en"' && team.acf.opisanie_na_anglijskom)}</p>
                            <div className="footer">
                                <ul className="social-icons1 ">
                                    <li><a href="https://ru-ru.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://twitter.com/?lang=ru"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="https://ru.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="https://www.google.ru/"><i className="fab fa-google-plus-g"></i></a></li>
    
                                </ul>
                            </div>
                        </div>
                    </div>))}
                </div>
            </section>
        </div>
            
    </div>

    );
};


    

export default TeamStart;