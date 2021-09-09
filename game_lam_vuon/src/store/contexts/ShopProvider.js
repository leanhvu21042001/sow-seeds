import React, { useState } from 'react';

export const ShopContext = React.createContext();

function ShopProvider( { children } ) {
    const [shopProducts, setShopProducts] = useState([1, 2, 3]);

    const getShopProducts = () => {
        return shopProducts;
    }

    return (
        <ShopContext.Provider value={{ shopProducts, getShopProducts, setShopProducts }}>
            {children}
        </ShopContext.Provider>
    );
}

export default ShopProvider;