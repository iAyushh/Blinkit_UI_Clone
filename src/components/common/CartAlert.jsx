import React from 'react';
import { Alert, AlertDescription } from '../ui/alert';

const CartAlert = ({ show }) => {
  if (!show) return null;

  return (
    <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-right">
      <Alert className="bg-green-500 text-white border-green-600 shadow-xl">
        <AlertDescription className="font-semibold">
          ✓ Item added to cart!
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default CartAlert;