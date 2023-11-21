import React, { createContext, useState, useContext } from 'react';

const MenuHeightContext = createContext();

export const useMenuHeight = () => useContext(MenuHeightContext);

export const MenuHeightProvider = ({ children }) => {
    const [menuHeight, setMenuHeight] = useState(60);

    const updateMenuHeight = (height) => {
        setMenuHeight(height);
    };

    return (
        <MenuHeightContext.Provider value={{ menuHeight, updateMenuHeight }}>
            {children}
        </MenuHeightContext.Provider>
    );
};
