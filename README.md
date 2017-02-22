# react-price-ticker

React price ticker component, auto increment price every 200ms

##### Why

Simple price ticker that shows a price increasing client side every 200ms
An example can be found here https://www.nib.com.au/health-insurance/itsworthit

## Installation

```bash
npm install --save @nib-health-funds/react-price-ticker
```

## Usage

```js
import PriceTicker from './PriceTicker';

<PriceTicker incrementPrice={incrementPrice} currencySymbol="$"/>
```
