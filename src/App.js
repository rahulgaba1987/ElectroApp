
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/index'
import About from './pages/about'
import Cart from './pages/cart'
import Services from './pages/services'
import Dashboard from './pages/users/dashboard';
import AboutUser from './pages/users/aboutUser';
import Profile from './pages/users/profile';
import CustomNavbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import Login from './pages/login'
import Register from './pages/register'



function App() {

  return (
    <>
      <div >
       <CustomNavbar/>
        <BrowserRouter>
        <ToastContainer />
           <Routes>
              <Route path='/' element={<Index/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/services' element={<Services/>}/>
              <Route path='/users' element={<Dashboard/>}>
                  <Route path='about' element={<AboutUser/>}/>
                  <Route path='profile' element={<Profile/>}/>
               
              </Route>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>

           </Routes>
        </BrowserRouter>
      </div>
    </>

  );
}

export default App;
