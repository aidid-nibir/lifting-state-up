import React from 'react';
import './boilingVerdict.css'

const Boilingverdict = (props) => {
    if (props.temp >= 100) {
        return <h3 className='positive'>The water would boil.</h3>;
    }
    return <h3 className='negative'>The water would not boil.</h3>;
}

export default Boilingverdict;
