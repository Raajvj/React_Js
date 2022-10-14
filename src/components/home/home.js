import React from 'react';
import './home.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Menu } from '../menu/menu';
export function Home(){
    return(
        <div className='text-center'>
            <div>
                <Menu/>
            </div>
            <h1 className=' text-primary home_content'>Hello World!</h1>
           
        </div>
    );
}