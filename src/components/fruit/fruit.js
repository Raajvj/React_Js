import {React,useState} from 'react';
import { Menu } from '../menu/menu';
import mangoes from './mangoes.png';
import bananas from './bananas.png';
export function Fruit(){
    const[count1,setCount1]=useState(0);
    const[count2,setCount2]=useState(0);
    return(
        <div className=''>
            <Menu/>
            <div className='text-center bg-secondary w-50 m-auto rounded shadow-lg'>
                    <h1 className='fruit_content pt-3'>BoB ate <span className='text-white'>{count1}</span> Mangoes <span className='text-white'>{count2}</span> Bananas</h1>
                    <div className='d-flex fruit_img_div w-50 m-auto'>
                        <img className='banana_img w-50 mt-3 rounded' src={mangoes}/>
                        <img className='mango_img w-50 mt-3 ml-2 rounded'src={bananas}/>
                    </div>
                    <button className='btn btn-warning text-danger mr-3 mt-3 mb-3' onClick={()=>setCount1(count1+1)}> eat Mango</button>
                    <button className='btn btn-warning text-danger ml-5 mt-3 mb-3' onClick={()=>setCount2(count2+1)}> eat Banana</button>
            </div>
        </div>
    );
}