import React from 'react';
import ReactDOM from 'react-dom'
import Home from './Home/Home';
import Privacy from './Privacy/Privacy.jsx'
import Prohibited from './Prohibited/Prohibited.jsx'
import Refund from './Refund/Refund.jsx'
import Trems from './Trems/Trems.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Routeroutlet(){


  return <div>
    
    <BrowserRouter>
    <Routes>
    <Route index element={<Home/>} />
    <Route path="home" element={<Home/>}/>
    <Route path="privacy" element={<Privacy />} />
    <Route path="prohibited" element={<Prohibited />} />
    <Route path="refund" element={<Refund/>}/>
    <Route path="trems" element={<Trems/>}/>
    </Routes>
    </BrowserRouter>

  </div>
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routeroutlet/>
  </React.StrictMode>
);