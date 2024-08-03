import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import Topics from './Pages/Topics';
import { NavLink, Route, Routes } from 'react-router-dom';
import Quiz from './Pages/Quiz';


function App() {
  
  return (
    <div className="App relative overflow-x-hidden">
      
      <Routes>
        <Route path="/"  element={<HomePage/>}/> 
        <Route path="/topics/:topic" element={<Topics/>}/>
        <Route path='/quiz/:topic' element={<Quiz/>}/>
        <Route path='/*' element={<div className='h-screen w-screen justify-center flex flex-col items-center'>
          <img src='https://res.cloudinary.com/dihp6gdpi/image/upload/v1722655420/not-found.jpg'/>
          <p>This Page Does Not Exist</p>
          <p>Try : <NavLink to='/' className='text-blue-700'>Goto HomePage</NavLink></p>
          

        </div>}/>
      </Routes>
      
    </div>
  );
}

export default App;
