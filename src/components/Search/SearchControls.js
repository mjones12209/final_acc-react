import {useContext} from 'react';
import {AdvancedMoviesContext} from '../../contexts/AdvancedMoviesContext';
import DomPurify from 'dompurify';

const SearchControls = () => {

    const { setGenre, advanced, setAdvanced } = useContext(
    AdvancedMoviesContext
    );

    const handleShow = () => {
    setAdvanced({
        ...advanced,
        showAdvanced: !advanced.showAdvanced,
    });
    };
    
    const setSearchState = (target)=> {
        setGenre({
            searchType: "search",
            genreId: null,
            genreName: "Search",
        });
        
        setAdvanced({
            ...advanced,
            searchValue: DomPurify.sanitize(target),
            searchQuery: DomPurify.sanitize(target).replace(
            / /g,
            "+"
            ),
        });        
    }
        
    return {
        handleShow,
        setSearchState
    }
}

export default SearchControls;
