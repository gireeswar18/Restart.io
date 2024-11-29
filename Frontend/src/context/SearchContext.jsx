import { createContext, useState } from "react";
import PropTypes from "prop-types";

const SearchContext = createContext();

export const SearchProvider = ({children}) => {

	const [showSearch, setShowSearch] = useState(false);

	return (
		<SearchContext.Provider value={[showSearch, () => setShowSearch(prev => !prev)]}>
			{children}
		</SearchContext.Provider>
	)
}

SearchProvider.propTypes = {
	children: PropTypes.node.isRequired,
  };
  
  export default SearchContext;