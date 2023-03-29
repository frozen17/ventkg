import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom'
import { HOME_ROUTE } from '../../utils/Consts';

const NotFound = () => {
    return (
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                    <h1 className="display-1"><img className='errorpage' src="assets/img/404pageLogo.png" alt="" /></h1>
                    <h1 className="mb-4">Ой!</h1>
                    <p className="mb-4">Похоже, мы не можем найти нужную вам страницу.</p>
                    <div className='frame'>
                       <Link className="custom-btn btn-2 goBackBtn py-3 px-5" to={HOME_ROUTE}>Перейти на главную</Link>
                    </div>                    
                </div>      
            </div>
        </div>
    </div>
    );
};

export default NotFound;