import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import CategoriesPage from './pages/CategoriesPage';
import ErrorPage from './pages/ErrorPage';
import ErrorBoundary from './ErrorBoundary';



const App = () => {
  return (
    <Router>
      <Navbar/>
<ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />} />     
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary> 
      <Footer />
    </Router>
  );
}

export default App;
