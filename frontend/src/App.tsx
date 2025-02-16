import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import OurStory from './components/OurStory';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Shop from './components/Shop';

function App() {
  return (
    <>
    <div className="min-h-screen bg-white">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Hero/>} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/ourstory' element={<OurStory/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
{/* Happiness Section...
      <section>
      <div className="h-screen flex flex-col items-center justify-center text-white text-center bg-gradient-to-r from-[#ee7752] via-[#e73c7e] to-[#23d5ab] bg-[length:400%_400%] animate-gradient px-4">
        <div>
          <h2 className="text-4xl font-bold">Happiness 100% Guaranteed</h2>
    <p className="text-sm uppercase tracking-wider mt-2">SEE TERMS OF USE.</p>
    <button className="mt-8 bg-indigo-900 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-800 transition-colors">
      TRY NOW
    </button>
    </div>
    </div>
    </section> */}
    
    <Footer/>
   </div>
   </>
  );
}

export default App;