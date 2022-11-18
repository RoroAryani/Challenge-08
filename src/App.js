import LandingPage from "./Components/LandingPage";
import React from 'react';

import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={          
                <LandingPage></LandingPage> 
          }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;