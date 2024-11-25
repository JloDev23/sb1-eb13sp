import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useCartStore } from '../store/cart';
import { formatPrice } from '../lib/utils';

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">
          Looks like you haven't added any items to your cart yet.
        </p>
        <Link to="/products">
          <Button size="lg">Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="bg-white p-4 rounded-lg shadow-sm flex items-center"
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="ml-4 flex-grow">
                  <h3 className="font-semibold">{item.product.name}</h3>
                  <p className="text-blue-600 font-semibold">
                    {formatPrice(item.product.price)}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, Math.max(1, item.quantity - 1))
                      }
                      className="p-1 rounded-md border"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="mx-3 font-semibold">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          Math.min(item.product.stock, item.quantity + 1)
                        )
                      }
                      className="p-1 rounded-md border"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{total >= 50 ? 'Free' : formatPrice(5.99)}</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>{formatPrice(total >= 50 ? total : total + 5.99)}</span>
                </div>
              </div>
              <Link to="/checkout">
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}