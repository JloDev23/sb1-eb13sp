import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80"
            alt="Cleaning supplies background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Cleaning Supplies for Every Need
            </h1>
            <p className="text-xl mb-8">
              Discover our premium selection of cleaning tools and supplies for your home
              or business.
            </p>
            <Link to="/products">
              <Button size="lg" className="inline-flex items-center">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm">
              <Truck className="h-10 w-10 text-blue-600" />
              <div>
                <h3 className="font-semibold text-lg">Free Shipping</h3>
                <p className="text-gray-600">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm">
              <Shield className="h-10 w-10 text-blue-600" />
              <div>
                <h3 className="font-semibold text-lg">Satisfaction Guaranteed</h3>
                <p className="text-gray-600">30-day money-back guarantee</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-sm">
              <Clock className="h-10 w-10 text-blue-600" />
              <div>
                <h3 className="font-semibold text-lg">Fast Delivery</h3>
                <p className="text-gray-600">2-3 business days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < product.rating ? 'fill-current' : 'fill-none'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        ({product.reviews})
                      </span>
                    </div>
                    <p className="text-blue-600 font-semibold">${product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const featuredProducts = [
  {
    id: '1',
    name: 'Professional Microfiber Mop',
    price: 39.99,
    rating: 5,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1603251579431-8041402bdeda?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    name: 'Heavy-Duty Cleaning Bucket',
    price: 24.99,
    rating: 4,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    name: 'Premium Microfiber Cloths (12-Pack)',
    price: 19.99,
    rating: 5,
    reviews: 256,
    image: 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&q=80',
  },
  {
    id: '4',
    name: 'Multi-Surface Cleaning Kit',
    price: 49.99,
    rating: 4,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80',
  },
];