# react-price-ticker

Simple price ticker that shows a price increasing client side every 200ms
An example can be found here https://www.nib.com.au/health-insurance/itsworthit

## Installation

```bash
npm install --save @nib/react-price-ticker
```

## Usage

```js
import PriceTicker from './PriceTicker';

<PriceTicker incrementPrice={incrementPrice} currencySymbol="$"/>
```

#Props

#### incrementPrice:

Price that you want to increment by every second.

#### currencySymbol:

Defaults to the $ dollar sign.

## Change log

### 0.1.0

- Pushed: first version
