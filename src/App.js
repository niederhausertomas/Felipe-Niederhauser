import './App.css';
import Header from './components/header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Main/>} />
          </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
