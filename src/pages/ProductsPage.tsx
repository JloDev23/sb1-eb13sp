import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { Button } from '../components/ui/Button';

const categories = [
  'All Products',
  'Mops',
  'Buckets',
  'Cleaning Tools',
  'Bathroom Cleaners',
  'Floor Care',
];

const products = [
  {
    id: '1',
    name: 'Professional Microfiber Mop',
    price: 39.99,
    rating: 5,
    reviews: 128,
    category: 'Mops',
    image: 'https://images.unsplash.com/photo-1603251579431-8041402bdeda?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    name: 'Heavy-Duty Cleaning Bucket',
    price: 24.99,
    rating: 4,
    reviews: 89,
    category: 'Buckets',
    image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&q=80',
  },
  // Add more products as needed
];

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const currentCategory = searchParams.get('category') || 'All Products';

  const filteredProducts = currentCategory === 'All Products'
    ? products
    : products.filter(product => product.category === currentCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="sm:hidden"
        >
          <SlidersHorizontal className="h-5 w-5 mr-2" />
          Filters
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className={`w-full sm:w-64 ${showFilters ? 'block' : 'hidden'} sm:block`}>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Filter className="h-5 w-5 mr-2" />
              <h2 className="font-semibold">Categories</h2>
            </div>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSearchParams({ category })}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                    currentCategory === category
                      ? 'bg-blue-50 text-blue-600'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-blue-600 font-semibold">${product.price}</p>
                  <Button className="w-full mt-4">Add to Cart</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}