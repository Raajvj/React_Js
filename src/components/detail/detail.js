import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Menu } from "../menu/menu";
export function Detail(){
    const[detail,setDetail]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((response)=>response.json())
        .then((data)=>{
            setDetail(data)
        })
    },[])
    return(
       
        <div>
          <Menu/>   
            
            <div className=" row">
                {detail.map((value,index)=>(
                    <div className="col-lg-3">
                        <div className="card mt-2 rounded">
                            <div className="card-body bg-primary">
                                <h1 className="text-center text-white">{value.id}</h1>
                                    <div className="card-header bg-warning rounded">
                                        <p className="text-center text-white">{value.title}</p>
                                    
                                    </div>
                                    <div className="card-text bg-danger rounded">
                                        <p className="text-center text-white">{value.userId}</p>
                                    </div>
                            </div>
                        </div>
                    </div>    
                ))}
            </div>
        </div>
    );
}