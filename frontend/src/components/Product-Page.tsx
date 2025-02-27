import { useState } from "react";
import { Minus, Plus, Star } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("regular");

  return (<>
    <Navbar/>
    <section className="bg-gradient-to-b from-[#E171C4] via-[#E171C4] to-[#e7c58d] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative w-full h-96 overflow-hidden rounded-lg bg-white">
              <img src="/placeholder.svg" alt="BB Cookies" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <button
                  key={i}
                  className="relative w-full h-24 overflow-hidden rounded-lg bg-white border-2 border-transparent hover:border-[#E171C4] transition-colors"
                >
                  <img src="/placeholder.svg" alt={`Product thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold text-black mb-2">BB Cookies</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(128 reviews)</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-2xl font-bold text-black">$12.99</p>
              <p className="text-gray-700 leading-relaxed">
                Indulge in our signature BB Cookies, crafted with premium ingredients and baked to perfection. Each
                cookie features a delightful blend of rich chocolate chips and crispy texture, creating an irresistible
                treat that's perfect for any occasion.
              </p>
            </div>

            <div className="space-y-4">
              {/* Size Selector */}
              <div className="space-y-2">
                <label className="text-base font-semibold block">Size</label>
                <div className="flex gap-4">
                  {['regular', 'large'].map(size => (
                    <label
                      key={size}
                      className={`flex items-center gap-2 border rounded-lg p-3 cursor-pointer hover:bg-white/10 transition-colors ${selectedSize === size ? "bg-white/20" : ""}`}
                    >
                      <input
                        type="radio"
                        name="size"
                        value={size}
                        checked={selectedSize === size}
                        onChange={(e) => setSelectedSize(e.target.value)}
                        className="w-4 h-4 text-[#E171C4] border-gray-300 focus:ring-[#E171C4]"
                      />
                      <span>{size === "regular" ? "Regular Pack" : "Family Pack"}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-2">
                <label className="text-base font-semibold block">Quantity</label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-white/10 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-xl font-medium min-w-[2ch] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-white/10 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-black text-white rounded-lg py-3 text-lg font-medium hover:bg-black/80 transition-colors">
              Add to Cart
            </button>

            {/* Product Details */}
            <div className="space-y-4 border-t pt-6">
              <h3 className="font-semibold text-lg">Product Details</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Made with premium quality ingredients</li>
                <li>No artificial preservatives</li>
                <li>Freshly baked daily</li>
                <li>Perfect crispy texture</li>
                <li>Available in multiple pack sizes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}