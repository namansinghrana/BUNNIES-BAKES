import ProductCard from '../components/ProductCard';
import SellChips from '../images/sellchips.jpg';
import Choclate from '../images/chocklate.jpg';
import Cookies from '../images/cookies.jpg';
import Chip from '../images/chip.png';


const featuredProducts = [
    {
      id: 1,
      name: "BB Cookies",
      price: 12.99,
      image: Cookies
    },
    {
      id: 2,
      name: "BB Chips",
      price: 14.99,
      image: SellChips
    },
    {
      id: 3,
      name: "BB Choclate Bar",
      price: 13.99,
      image: Choclate
    }
  ];
  
const Products = () => {
  return (
    <>
    
      {/* Featured Products */}
      <section className="bg-gradient-to-b from-[#E171C4] via-[#E171C4]  to-[#e7c58d] min-h-screen">
        <div className="flex justify-between items-center mb-14">
          <h2 className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-3xl sm:text-5xl mt-20 font-semibold mb-2 text-black">
            Our Best Sellers
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
{/*       
      <div className='relative h-0 flex  justify-between items-center'>
          <img src={Chip} alt="Packet" className="absolute -top-20 -left-32 rotate-[90deg] w-[40%]"/>
          <img src={Chip} alt="Packet" className="absolute -top-20  rotate-[90deg] left-96 translate-x-[37rem] w-[40%]"/>
        </div> */}
    </>
  )
}

export default Products