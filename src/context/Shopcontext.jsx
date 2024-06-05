import React, { createContext } from "react";
import all_products from "../components/assets/all_product";
export const Shopcontext = createContext(null);
const ShopContextProvider = (props) => {
  const contextValue = { all_products };
  return (
    <Shopcontext.Provider value={contextValue}>
      {props.children}
    </Shopcontext.Provider>
  );
};
export default ShopContextProvider;
