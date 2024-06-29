import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import StoreSearch from './pages/StoreSearch/StoreSearch';
import About from './pages/About/About';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes class="bookstore-container">
                <Route path="/" element={<Main />} />
                <Route path="/storesearch" element={<StoreSearch />} />
                <Route path="/about" element={<About />} />={' '}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
