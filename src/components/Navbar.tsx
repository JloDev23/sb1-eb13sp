import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Sparkles } from 'lucide-react';
import { useCartStore } from '../store/cart';

export default function Navbar() {
  const cartItems = useCartStore((state) => state.items);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Sparkles className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Clean Sweep
              </span>
            </Link>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              <Link
                to="/products"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
              >
                Products
              </Link>
              <Link
                to="/products?category=mops"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
              >
                Mops
              </Link>
              <Link
                to="/products?category=cleaning-tools"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
              >
                Cleaning Tools
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <Link
              to="/cart"
              className="relative p-2 text-gray-600 hover:text-gray-900"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            <Link
              to="/account"
              className="p-2 text-gray-600 hover:text-gray-900"
            >
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}