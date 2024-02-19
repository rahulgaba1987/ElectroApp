
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
import UserProvider from './context/user.provider';
import Home from './pages/users/home';
import Order from './pages/users/order';
import AdminHome from './pages/admin/adminhome';
import AdminDasboard from './pages/admin/admindasboard1';
import AddProduct from './pages/admin/addproduct'


function App() {

  return (
    <>
    <UserProvider>
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
                  <Route path='about' element={<AboutUser />}/>
                  <Route path='orders' element={<Order />}/>
                  <Route path='profile' element={<Profile />}/>
                  <Route path='home' element={<Home/>}/>
               
              </Route>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>

              <Route path='/admin' element={<AdminDasboard/>}>
                      <Route path='home' element={<AdminHome />}/>
                      <Route path='add-product' element={<AddProduct />}/>
              </Route>

           </Routes>
        </BrowserRouter>
      </div>
      </UserProvider>
    </>

  );
}

export default App;
