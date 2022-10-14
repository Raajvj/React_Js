import React from 'react';
import './league.css';
import rcbimg from './rcb.png';
import cskimg from './csk.png';
import 'bootstrap/dist/css/bootstrap.css';
import { Menu } from '../menu/menu';

export function League(){
    return(
        <div>
            <Menu/>
            <div className='league_div1 text-center'>
                <h1>Super Over League</h1>
                <div>
                    <img className='rcbimg' src={rcbimg}/>
                    <img className='cskimg' src={cskimg}/>
                </div>
            </div>
        </div>
    );
}