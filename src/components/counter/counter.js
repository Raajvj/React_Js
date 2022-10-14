
import {React,useState} from 'react';
import { Menu } from '../menu/menu';
import './counter.css';
export function Counter(){
    const[count,setCount]=useState(0);
    return(
        <div className=''>
            <Menu/>
            <div className='count_div1 text-center bg-secondary'>
                    <h1>Counter</h1>
                    <h1>{count}</h1>
                    <button className='btn btn-danger' onClick={()=>setCount(count+1)}>Increase</button>
                    <button className='btn btn-danger' onClick={()=>setCount(count*0)}>Reset</button>
                    <button className='btn btn-danger' onClick={()=>setCount(count-1)}>Decrease</button>
            </div>
        </div>
    );
}