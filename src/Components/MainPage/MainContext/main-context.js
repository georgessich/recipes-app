import React from 'react';
const SearchContext = React.createContext({
    addIngredients: '',
    setAddIngredients: () => {},
}
    
);

export default SearchContext;