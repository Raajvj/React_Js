import{React,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './thank.css';

export function Thank(){

    return(
        <div>
             
            <div className='feedback1_main1'>
        
                    <div className='feedback1_div2'>
                    <FontAwesomeIcon icon={faHeart} className=' icon4 display-4 text-danger'/>
                    <h1 className=' head_main1 text-dark'>Thankyou!</h1>
                    <h3 className='head_sub text-dark'>We will use your feedback to improve our customer support performance</h3>
                    </div>
               
            </div>
        </div>
    );





}
    