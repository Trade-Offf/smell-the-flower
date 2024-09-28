import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';


const App = () => (
    <div>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
    </div>
);

export default App;