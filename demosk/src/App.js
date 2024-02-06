import './App.css';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css' ;
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Addstaff from './Staff/Addstaff';
import Editstaff from './Staff/Editstaff';
import Viewstaff from './Staff/Viewstaff';

function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar/>
        <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/addstaff' element={<Addstaff/>} />
       <Route exact path='/Editstaff/:id'element={<Editstaff/>}/>
       <Route path="/viewstaff/:id" element={<Viewstaff />} />
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
