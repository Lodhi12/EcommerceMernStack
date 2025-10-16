import { createContext, type ReactNode } from "react";
import { products } from "../assets/assets";
import type { ProductType } from "../assets/assets";

interface ShopContextType {
  currency: string;
  delivery_fee: number;
  products: ProductType[];
}

interface ShopContextProviderProps {
  children: ReactNode;
}

export const ShopContext = createContext<ShopContextType | undefined>(
  undefined
);

const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const currency = "$";
  const delivery_fee = 10;

  const value = {
    products,
    currency,
    delivery_fee,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
