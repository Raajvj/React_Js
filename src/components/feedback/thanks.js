import {React,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
export function Thanks(){
    return(
        <div className='thanks_div1 text-center mt-5 bg-primary w-50 mr-auto ml-auto pt-5 rounded shadow-lg'>
            <FontAwesomeIcon icon={faHeart} className='display-1 text-danger'/>
            <h1 className='text-white'>Thank You!</h1>
            <h3 className='pb-5 text-white'>We will use your feedback to improve our customer support performance</h3>
        </div>
    );
}