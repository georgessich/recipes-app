import { useState } from 'react';
import CardsMenu from './CardsMenu';
import Cards from './Cards';


const CardsPage = (props) => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [ searchQuery, setSearchQuery ] = useState(query || '');

    return (
        <section>
            <CardsMenu searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}/>
            <Cards pageId={props.pageId} setPageId={props.setPageId} searchQuery={searchQuery}/>
        </section>
    )
}

export default CardsPage