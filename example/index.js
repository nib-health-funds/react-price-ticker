import React from 'react';
import ReactDOM from 'react-dom';
import PriceTicker from '..';

ReactDOM.render(
  <PriceTicker incrementPrice={40} currencySymbol="$"/>,
  document.querySelector('#app')
);
