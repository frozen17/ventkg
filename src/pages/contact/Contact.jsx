import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "./Contact.css";
import axios from 'axios';
import { useForm, ValidationError } from '@formspree/react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const Contact = () => {
  const { t } = useTranslation();
  const [identity, setIdentity] = useState(null);
  
  const [state, handleSubmit] = useForm("mdovedeb");
  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }
  
  const getData = async () => {
    try {
      await axios
        .get(`http://192.168.88.167/wp-json/wp/v2/personal_data`)
        .then(res => setIdentity(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  
// if (state) {
//   useEffect(() => {
//     getData();
//   }, [state]);
// }
useEffect(() => {
  getData();
}, []);

const handleMsgSubmit = async (e) => {
    e.preventDefault();
    
      


    

;}


    return (
      <div id='#contactUs'>
        <section className="contact" id='contactUs'>
          <div className="contact-heading">
            <h2 className='contact-feedback'>{t("contact")}</h2>
          </div>

          <div className="contact-container">
            <div className="row-contact">

              <div className="column">
                <div className="contact-widget">
                  <div className="contact-widget-item">
                    <div className="icon-info">
                      <i className="fa fa-map-marker contact-i" ></i>
                    </div>
                    <div className="text">
                      <h3 className='contact-text'>{t("contact-address")}</h3>
                      <p className='contact-descr'>{identity?.map((identity) => (identity.acf.address))}</p>
                    </div>
                  </div>

                  <div className="contact-widget-item">
                    <div className="icon-info">
                      <i className="fa fa-phone contact-i"></i>
                    </div>
                    <div className="text">
                      <h3 className='contact-text'>{t("contact-number")}</h3>
                      <p className='contact-descr'>{identity?.map((identity) => (identity.acf.number))}</p>
                    </div>
                  </div>

                  <div className="contact-widget-item">
                    <div className="icon-info">
                      <i className="fa fa-envelope contact-i"></i>
                    </div>
                    <div className="text">
                      <h3 className='contact-text'>Email</h3>
                      <p className='contact-descr'>{identity?.map((identity) => (identity.acf.email))}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="contact-form">
              
                  <form className='contact-form-feed' onSubmit={handleSubmit}>
                    <input className='contact-input' name='Имя' id='name' type="text" placeholder={t("contact-place")} required/>
                    <ValidationError 
                    prefix="Имя" 
                    field="name"
                    errors={state.errors}
                  />
                    <input className='contact-input' name='Номер' id='number' type="number" placeholder="0(999) 99 99 99" required />
                    <ValidationError 
                    prefix="Номер" 
                    field="number"
                    errors={state.errors}
                  />
                    <textarea className='contact-textarea' id='message' name='Сообщение' required placeholder={t("contact-msg")}></textarea>
                    <ValidationError 
                    prefix="Сообщение" 
                    field="message"
                    errors={state.errors}
                  />
                    {state.submitting ? <Alert  severity="success">Отправлено</Alert> : <button type='submit' disabled={state.submitting} className='site-btn'>{t("contact-send")}</button>}
                  </form>
                </div>
              </div>
            </div>

            <div className="row-contact">
              <div className="map-column">
                <div className="contact-map">
                <iframe className='contact-iframe' src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa539229262237034be2a347ff3baebaee5dc46022fd3907da5a0d82d2455f8fd&amp;source=constructor" width="500" height="400"></iframe>
                </div>
              </div>
            </div>
             
          </div>
        </section>
      </div>
    );
};

export default Contact;