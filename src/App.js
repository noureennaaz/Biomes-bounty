import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import { Route, Routes } from 'react-router-dom';


function App() {
  
  return (
    <div className="App relative">
      
      <Routes>
        <Route path="/"  element={<HomePage/>}/> 
        <Route path="/topics/:topic" element={<HomePage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
