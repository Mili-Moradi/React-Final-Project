//App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './pages/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Leistungen from './pages/Leistungen';
import Blog from './pages/Blog';
import Kontakt from './pages/Kontakt';
import Error from './pages/Error';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

import './styles/App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='ueber-uns' element={<About />} />
            <Route path='leistungen' element={<Leistungen />} />
            <Route path='blog' element={<Blog />} />
            <Route path='kontakt' element={<Kontakt />} />
            <Route path='impressum' element={<Impressum />} />
            <Route path='datenschutz' element={<Datenschutz />} />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
