import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L5 3H3m4 10v6a1 1 0 001 1h8a1 1 0 001-1v-6M9 13h6" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Start shopping to add items to your cart</p>
          <Link
            to="/shop"
            className="bg-primary-600 hover:bg-primary-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2 border-2 border-transparent hover:border-primary-500 shadow-lg hover:shadow-xl"
          >
            <span>Continue Shopping</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        <p className="text-gray-600 mt-2">Review your items before checkout</p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">
              {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}
            </h2>
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors duration-200"
            >
              Clear Cart
            </button>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {cartItems.map(item => (
            <div key={item.id} className="p-6">
              <div className="flex items-center space-x-4">
                <img
                  className="w-20 h-20 object-cover rounded-md"
                  src={item.image}
                  alt={item.name}
                />
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium text-gray-900 truncate">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {item.category}
                  </p>
                  <p className="text-lg font-semibold text-gray-900 mt-2">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  
                  <span className="text-lg font-medium text-gray-900 w-8 text-center">
                    {item.quantity}
                  </span>
                  
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>

                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-700 text-sm mt-1 transition-colors duration-200"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="px-6 py-4 bg-gray-50 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-medium text-gray-900">Total:</span>
            <span className="text-2xl font-bold text-gray-900">
              ${getTotalPrice().toFixed(2)}
            </span>
          </div>
          
          <div className="flex space-x-4">
            <Link
              to="/shop"
              className="flex-1 bg-gray-200 text-gray-700 hover:bg-gray-300 font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-center border-2 border-transparent hover:border-gray-400"
            >
              Continue Shopping
            </Link>
            <button
              onClick={() => alert('Checkout functionality would be implemented here')}
              className="flex-1 bg-primary-600 hover:bg-primary-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200 border-2 border-transparent hover:border-primary-500 shadow-lg hover:shadow-xl"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;