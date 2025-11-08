// src/components/ui/alert.jsx
import React from "react";

export const Alert = ({ children }) => (
  <div className="bg-green-100 text-green-800 p-3 rounded shadow-md">
    {children}
  </div>
);

export const AlertDescription = ({ children }) => (
  <p className="text-sm">{children}</p>
);
