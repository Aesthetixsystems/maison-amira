"use client";

import Link from "next/link";
import { BagIcon } from "./icons";
import { useCart } from "@/context/CartContext";

export default function BagButton() {
  const { count } = useCart();
  return (
    <Link
      href="/cart"
      aria-label="Shopping bag"
      className="flex items-center gap-2 p-1 transition-colors hover:text-tan"
    >
      <span className="relative">
        <BagIcon className="h-[1.35rem] w-[1.35rem]" />
        {count > 0 && (
          <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-tan text-[0.6rem] font-medium text-cream lg:hidden">
            {count}
          </span>
        )}
      </span>
      <span className="hidden font-sans text-[0.7rem] uppercase tracking-widest lg:inline">
        Bag ({count})
      </span>
    </Link>
  );
}
