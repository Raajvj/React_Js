import {React,useState} from 'react';
import './fruit1.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Menu } from '../menu/menu';
import mango from './mango.webp';
import banana from './banana.webp';

export function Fruit1(){
    const[counta,setCounta]=useState(0)
    const[countb,setCountb]=useState(0)
    
    return(
        <div>
    <Menu/>
        <div className='fruit1_main'>

            <div className='fruit1_div'>
                    <h1 className='heading'>Kong ate <span className='text-danger'> {counta} </span> Mangoes <span className='text-danger'>{countb}</span> Bananas</h1>
                         <div className='fruitbox d-flex'>

                            <img className='mango_image rounded' src={mango}/>
                            <img className='banana_image rounded'src={banana}/> 

                        </div>

                    <button className='btn_c' onClick={()=>setCounta(counta+1)}> Eat mango</button> 
                    <button className='btn_b' onClick={()=>setCountb(countb+1)}> Eat banana</button>
                   
                    
                   

            </div>

            
        </div>
        </div>
    );
}
