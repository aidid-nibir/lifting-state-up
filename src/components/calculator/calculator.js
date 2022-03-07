import React, { Component } from 'react';
import Temperatureinput from '../temperatureInput/temperatureInput'
import Boilingverdict from '../boilingVerdict/boilingVerdict';
import './calculator.css'
import { tryConvert, toCelsius, toFahrenheit } from '../converter/converter';

class calculator extends Component {
    state = {
        temperature: '',
        scale: ''
    }
    handleTempInput = (inputTemperature, temperatureType) => {
        if (temperatureType === 'Celcius') {
            this.setState({ temperature: inputTemperature, scale: temperatureType });
        }
        else {
            this.setState({ temperature: inputTemperature, scale: temperatureType });
        }
    }
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'Fahrenheit' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'Celcius' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div className='calculator'>
                <h3>Temperature Conversion Fields Bellow</h3>
                <div>
                    <Temperatureinput name='Celcius' onTemperatureChange={this.handleTempInput} value={celsius} />
                    <Temperatureinput name='Fahrenheit' onTemperatureChange={this.handleTempInput} value={fahrenheit} />
                    <Boilingverdict temp={parseFloat(temperature)} />
                </div>
            </div>
        );
    }
}

export default calculator;
