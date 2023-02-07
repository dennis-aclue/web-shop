import React from 'react';
import Home from './components/routes/home/home.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/routes/navigation/navigation.component';
import Authentication from './components/routes/authentication/authentication.component';

export default function App() {

  const Shop = () => {
    return <h1>Shop</h1>
  }

  return <>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  </>
}
