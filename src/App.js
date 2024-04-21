import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'; // Import your styles if you have any
import ProductList from '.components/ProductList'; // Import ProductList component
import ProductDetailPage from '.components/ProductDetailPage'; // Import ProductDetailPage component
import LoginPage from '.components/LoginPage'; // Import LoginPage component

function App() {
  return (
    <Router>
      <div className="App">
        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/login" element={<LoginPage />} /> {/* Add LoginPage route */}
        </Routes>
      </div>
    </Router>
  );
}

const HomePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Navigate to the product page with the exact search term
    navigate(`/product/${searchTerm}`);
  };

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <div className="centered-search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ProductList />
    </div>
  );
};

export default App;
