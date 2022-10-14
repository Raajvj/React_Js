import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import 'bootstrap/dist/css/bootstrap.css';

export function Menu(){
    return(
       <div className="menu_div1">
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/card"><li>Card</li></Link>
                <Link to="/league"><li>League</li></Link>
                <Link to="/techcard"><li>Tech_card</li></Link>
                <Link to="/counter"><li>Counter</li></Link>
                <Link to="/fruit"><li>Fruit</li></Link>
                <Link to="/feedback"><li>Feedback</li></Link>
                <Link to="/fruit1"><li>Fruit1</li></Link>
                <Link to="/feedback1"><li>Feedback1</li></Link>
                <Link to="/json"><li>Json</li></Link>
                <Link to="/nav"><li>navSass</li></Link>
               
            </ul>
       </div>
    );
}