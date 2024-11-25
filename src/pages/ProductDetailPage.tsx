import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Minus, Plus, Truck, Shield } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useCartStore } from '../store/cart';

const product = {
  id: '1',
  name: 'Professional Microfiber Mop',
  price: 39.99,
  description: 'Professional-grade microfiber mop perfect for all floor types. Features a 360-degree swivel head and machine-washable pads.',
  rating: 4.8,
  reviews: 128,
  stock: 50,
  images: [
    'https://images.unsplash.com/photo-1603251579431-8041402bdeda?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&q=80',
  ],
  features: [
    'Professional-grade materials',
    '360-degree swivel head',
    'Machine-washable pads',
    'Lightweight and durable',
    'Suitable for all floor types',
  ],
};

export default function ProductDetailPage() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ ...product, quantity });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <div className="aspect-w-1 aspect-h-1 mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ${
                  selectedImage === index ? 'ring-2 ring-blue-600' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating) ? 'fill-current' : 'fill-none'
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
          <p className="text-2xl font-bold text-blue-600 mb-6">${product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center mb-6">
            <span className="mr-4">Quantity:</span>
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 rounded-md border"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="mx-4 font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
              className="p-2 rounded-md border"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <Button
            size="lg"
            className="w-full mb-6"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>

          {/* Shipping Info */}
          <div className="space-y-4">
            <div className="flex items-center text-gray-600">
              <Truck className="h-5 w-5 mr-2" />
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Shield className="h-5 w-5 mr-2" />
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}