import { useState } from 'react';
import CardsMenu from './CardsMenu';
import Cards from './Cards';


const CardsPage = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [ searchQuery, setSearchQuery ] = useState(query || '');

    return (
        <section>
            <CardsMenu searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}/>
            <Cards searchQuery={searchQuery}/>
        </section>
    )
}

export default CardsPage