import Logo from '../images/logo.svg';
import { Instagram, Facebook, Twitter } from 'lucide-react';


const Footer = () => {
  return (
    <>
    {/* Footer */}
    <footer className="bg-black text-white z-2 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>

              
              <img className='w-96 mb-4' src={Logo} alt='Logo'/>
              <div className="flex flex-wrap gap-2.5 text-xs mb-20 pr-8">
                <a href="#" className="hover:text-primary-300 text-white">Terms of Use</a>
                <span>•</span>
                <a href="#" className="hover:text-primary-300 text-white">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-primary-300 text-white">Accessibility Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-primary-300 text-white">FAQ</a>
                <span>•</span>
                <a href="#" className="hover:text-primary-300 text-white">Become an Affiliate</a>
                <span>•</span>
                <a href="#" className="hover:text-primary-300 text-white">Reviews</a>
                <span>•</span>
                <a href="#" className="hover:text-primary-300 text-white">Jobs</a>
                <span>•</span>
                <a href="#" className="hover:text-primary-300 text-white">Track Orders</a>
                <span>•</span>
                <a href="#" className="hover:text-primary-300 text-white">Store Locator</a>
              </div>
              <div className="flex items-center gap-6">
                <div className='w-40'>
                <button className="border-4 border-white rounded-full px-8 py-3 text-lg font-bold hover:bg-white 
                hover:text-black transition-colors">
                  <h2 className='w-max '>CONTACT US</h2>
                </button></div>
                <div className="flex gap-4 ml-[8rem]">
                  <a href="#" className="hover:text-primary-300 text-white">
                    <Instagram className="h-6 w-6"/>
                  </a>
                  <a href="#" className="hover:text-primary-300 text-white">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="hover:text-primary-300 text-white">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className='-mx-4'>
              <h3 className="text-xl mb-4">Don't miss the magic:</h3>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-transparent border-1 border-white rounded-full px-8 py-3 text-lg font-bold focus:outline-none focus:border-primary-300"
                />
                <button className=" border-1 border-white rounded-full px-8 py-3 text-lg font-bold hover:bg-white hover:text-black hover:border-black">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/15 pt-0 text-sm
      flex flex-col md:flex-row justify-between items-center gap-8 mt-12"></div>
          <div className="mt-2 -mb-12 text-sm text-gray-400 items-center">
            © 2024 Bunnies Bakes
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer