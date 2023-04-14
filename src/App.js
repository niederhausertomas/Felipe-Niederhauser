import './App.css';
import Header from './components/header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bio from './components/Bio/Bio';
import Stories from './components/Stories/Stories';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/bio' element={<Bio/>} />
            <Route path='/stories' element={<Stories/>} />
          </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
