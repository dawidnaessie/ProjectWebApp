
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import About from './pages/About';
import Menu from './pages/Menu';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 w-full">
        <div className="max-w-6xl mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );

}

export default App
