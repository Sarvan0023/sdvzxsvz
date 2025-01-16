import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/features/productSlice";
import { useEffect } from "react";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

 
  console.log(products)


  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">New Arrivals</h1>
      <div className="flex justify-center gap-4 mb-6">
        <button className="px-4 py-2 bg-red-500 text-white rounded">All</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
          Women's
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
          Accessories
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
          Men's
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-lg overflow-hidden bg-white group"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              {product.tag && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
                  {product.tag}
                </span>
              )}
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-red-500 text-xl font-bold">
                  ${product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-gray-500 line-through">
                    ${product.oldPrice}
                  </span>
                )}
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            
                >
                  Add to Cart
                </button>
                <button
                  className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                
                >
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
