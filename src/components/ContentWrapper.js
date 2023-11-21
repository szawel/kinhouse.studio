import React from 'react';
import { useMenuHeight } from '../contexts/MenuHeightContext';

const ContentWrapper = ({ children }) => {
    const { menuHeight } = useMenuHeight();

    return (
        <div style={{ paddingTop: `${menuHeight}px` }}>
            {children}
        </div>
    );
};

export default ContentWrapper;
