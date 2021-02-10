import React, { useState } from 'react';
import axios from 'axios';

function Row({ title }) {
const [movies, setMovies] = useState([]);

useEffect(() => {
    return () => {
      
    }
}, [movies])

    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

export default Row;

