import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Adduser } from './components/Adduser';
import { Navbar } from './components/common/Navbar';
import { Showusers } from './components/Showusers';

function App() {
  return (
    <div className="">
      <ToastContainer/>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Adduser />} />
          <Route path='/showusers' element={<Showusers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
