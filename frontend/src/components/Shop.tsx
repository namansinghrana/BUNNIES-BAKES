import { useEffect, useState, ChangeEvent } from 'react'
// import '../App.css'
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category?: {
    id: number;
    name: string;
  };
}

interface Category {
  id: number;
  name: string;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("asc");

  useEffect(() => {
    fetch("http://bunniesbakes-backend.up.railway.app/api/products")
    .then(response => response.json())
    .then(data => setProducts(data));

    fetch("http://bunniesbakes-backend.up.railway.app/api/categories")
    .then(response => response.json())
    .then(data => setCategories(data));
  }, [] );

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  }

  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategory(categoryId ? Number(categoryId) : null);
  }

  const filteredProducts = products.filter(product => {
    return (
      (selectedCategory ? product.category?.id === Number(selectedCategory) : true)
      &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
})
.sort((a, b) => {
  if(sortOrder === "asc"){
    return a.price - b.price;
  }else{
    return b.price - a.price;
  }
});


  return (
    <>
    <div className='container'>
      <h1 className='my-4'>Product Catalog</h1>
      <div className='row align-items-center mb-4'>
        <div className='col-md-3 col-sm-12 mb-12'>
          <CategoryFilter 
          categories={categories} 
          onSelect={handleCategorySelect}/>
        </div>

        <div className='col-md-5 col-sm-12 mb-2'>
          <input
          type='text'
          className='form-control'
          placeholder='Search for products'
          onChange={handleSearchChange}/>
        </div>

        <div className='col-md-4 col-sm-12 mb-12'>
            <select className='form-control' onChange={handleSortChange}>
                <option value="asc">Sort by Price: Low to High</option>
                <option value="desc">Sort by Price: High to Low</option>
            </select>
        </div>
      </div>
      <div>
        {filteredProducts.length ? (
          //Display Products
          <ProductList products={filteredProducts}/>
        ) : (
          //No Products Found
          <ProductList products={products}/>
        )}
      </div>
    </div>
    </>
  )

}

export default Shop