import{React,useState} from 'react';
import'./feedback1.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceMeh, faFaceSadCry, faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '../menu/menu';
import { Thank } from './thank';
import { Link } from 'react-router-dom';


export function Feedback1(){

    return(
        <div>
               <Menu/>
            <div className=''>
            
                <div className='feedback1_main'>
                    <h1 className=' head_main text-dark'>How satisfied are you with our customer support performance?</h1>
                    <div className='feedback1_div1'>
                    <Link to="/thank"><FontAwesomeIcon icon={faFaceSadCry} className=' icon1 display-4 text-warning'/></Link>
                    <Link to="/thank"><FontAwesomeIcon icon={faFaceSmile} className=' icon2 display-4 ml-4 text-warning'/></Link>
                    <Link to="/thank"><FontAwesomeIcon icon={faFaceMeh} className=' icon3 display-4 ml-4 text-warning'/></Link>
                    </div>
                </div>
            </div>
        </div>
    );





}
        