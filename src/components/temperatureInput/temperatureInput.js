import React from 'react';

const Temperatureinput = (props) => {
    const handleChnge = (e) => {
        switch (props.name) {
            case 'Celcius':
                return props.onTemperatureChange(e.target.value, props.name);
            case 'Fahrenheit':
                return props.onTemperatureChange(e.target.value, props.name);
            default:
                return 0;
        }
    }
    return (
        <div>
            <fieldset>
                <legend>Please Enter Temperature in {props.name}</legend>
                <input type="text" name={props.name} value={props.value} onChange={handleChnge} />
            </fieldset>
        </div>
    )
}

export default Temperatureinput;
