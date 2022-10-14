import {React,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceMeh, faFaceSadCry, faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Menu } from '../menu/menu';
import { Thanks } from './thanks';

export function Feedback(){
    return(
        <div className=''>
            <Menu/>
            <div className='feedback_div1 bg-primary text-center w-50 mr-auto ml-auto mt-5 rounded shadow-lg pb-5'>
                <h1 className='text-white pb-5 pt-5'>How satisfied are you with our customer support performance?</h1>
                <div className='feedback_div2 mt-5 pb-5 pt-5 w-50 m-auto rounded bg-warning'>
                <Link to='/thanks'> <FontAwesomeIcon icon={faFaceSmile} className='display-4 text-primary'/></Link>
                <Link to='/thanks'> <FontAwesomeIcon icon={faFaceSadCry} className='display-4 ml-4 text-primary'/></Link>
                <Link to='/thanks'> <FontAwesomeIcon icon={faFaceMeh} className='display-4 ml-4 text-primary'/></Link>
                </div>
            </div>
        </div>
    );
}