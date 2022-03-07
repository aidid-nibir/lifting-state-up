import React from 'react';

const Boilingverdict = (props) => {
    if (props.temp >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

export default Boilingverdict;
