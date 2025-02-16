import Image from '../images/logo.png';
import Cart from '../images/cart.png';
import {Link} from 'react-router-dom';
export default function Navbar() {
  return (
  <>
    <div className="flex justify-center w-full px-4 py-8 bg-white-400/80 -mt-5 pb-5  backdrop-blur-sm">
      <img src={Image} alt="Bunnies Bakes Logo" className="h-12 mx-auto" />
      <div><button><img className='mt-1  size-5' src={Cart} alt="Cart"/></button></div>
    </div>
    <div className='border border-0.5 border-slate-200 mb-2'></div>
    <nav className="w-full  pt-2 bg-white/80 backdrop-blur-sm h-12 font-crimson">
      <div className="container mx-auto flex justify-center">  
        <ul className="flex justify-items-center space-x-28 text-base  font-crimson font-extrabold">
          <li className="hover:text-pink-600  transition-colors">
            <Link to='/'>HOME</Link>
            </li>
          <li className="hover:text-pink-600 transition-colors">
            <Link to='/shop'>  SHOP </Link>          
            </li>
          <li className="hover:text-pink-600 transition-colors">
            <Link to='/ourstory'>OUR STORY</Link>          
        </li>
          <li className="hover:text-pink-600 transition-colors">
            <Link to='/contact'>CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
}