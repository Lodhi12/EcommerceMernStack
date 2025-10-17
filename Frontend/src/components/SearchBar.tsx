import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const SearchBar = () => {
  const shopContext = useContext(ShopContext);
  if (!shopContext) {
    throw new Error("Context is empty");
  }
  const { search, setSearch, showSearch, setShowSearch } = shopContext;
  return <div>SearchBar</div>;
};

export default SearchBar;
