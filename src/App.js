import logo from './logo.svg';


import {Home} from './components/home/home';
import { Card } from './components/card/card';

import {League} from './components/league/league';
import { Techcard } from './components/techcard/tech_card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Counter } from './components/counter/counter';
import { Fruit } from './components/fruit/fruit';
import { Feedback } from './components/feedback/feedback';
import { Thanks } from './components/feedback/thanks';
import { Fruit1 } from './components/fruit1/fruit1';
import { Feedback1 } from './components/feedback1/feedback1';
import { Thank } from './components/feedback1/thank';
import { Detail } from './components/detail/detail';
import { Nav } from './components/menu_sass/nav';

function App() {
  return (
    <div className="App">
  
     
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/> 
                <Route path='/card' element={<Card/>}/>
                <Route path='/league' element={<League/>}/>  
                <Route path='/techcard' element={<Techcard/>}/>
                <Route path='/counter' element={<Counter/>}/>
                <Route path='/fruit' element={<Fruit/>}/>
                <Route path='/feedback' element={<Feedback/>}/>
                <Route path='/thanks' element={<Thanks/>}/>
                <Route path='/fruit1' element={<Fruit1/>}/>
                <Route path='/feedback1' element={<Feedback1/>}/>   
                <Route path='/thank' element={<Thank/>}/>
                <Route path='/json' element={<Detail/>}/>
                <Route path='/nav' element={<Nav/>}/>
                    
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;