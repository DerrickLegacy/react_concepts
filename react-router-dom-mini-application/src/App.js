import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About.jsx';
import Pricing from './pages/Pricing.jsx';
import SharedLayOut from './pages/SharedLayOut.jsx';
import Login from './pages/Login.jsx';
import Error from './pages/Error.jsx';
import Product from './pages/Product.jsx';
import SingleProduct from './pages/products/SingleProduct.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ProtectedRoute from './pages/ProtectedRoute.jsx';
import SharedProductLayout from './pages/products/SharedProductLayout.jsx';


function App() {
  const [user, setUser] = useState('');
  return (
    <div className="App">
      <Routes>
        <Route element={<SharedLayOut />} path='/' >
          <Route element={<Login setUser={setUser} />} index />
          <Route element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          } path='/dashboard' />
          <Route element={<About />} path='about' />
          <Route element={<Pricing />} path='pricing' />

          <Route element={<SharedProductLayout />} path='products'>
            <Route index element={<Product />} />
            <Route element={<SingleProduct />} path=':productId' />
          </Route>



          <Route element={<Error />} path='*' />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
