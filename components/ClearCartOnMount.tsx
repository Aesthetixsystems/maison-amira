"use client";

import { useEffect } from "react";
import { useCart } from "@/context/CartContext";

// Empties the bag once the order is confirmed.
export default function ClearCartOnMount() {
  const { clear } = useCart();
  useEffect(() => {
    clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
