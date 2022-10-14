import React from 'react';
import './card.css';
import cardprofileimg from './congrats-card-profile-img.png';
import watchimg from './watch2.webp';
import 'bootstrap/dist/css/bootstrap.css';
import { Menu } from '../menu/menu';
export function Card(){
    return(
        <div>
            <Menu/>
            <div className='card_div rounded text-center'>
                
                <div className='card_div1 rounded'>
                    <img className='profileimg' src={cardprofileimg}/>
                    <h1>Kiran.V</h1>
                    <p>Vishnu institute of Computer Education and Technology,Bhimavaram.</p>
                    <img className='watchimg' src={watchimg}/>
                </div>
            </div>
        </div>    
    );
}