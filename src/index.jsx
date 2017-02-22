/* global setInterval clearInterval */
import React from 'react';

class PriceTicker extends React.Component {

  alternateNumber = true;
  currencySymbol = '$';
  firstPriceIncrement;
  alternatePriceIncrement;

  constructor(props) {
    super();
    /*
      The below 2 values when added together 5 times per second, should result in a solid value. e.g.
      40 / 19.43% = 7.77
      40 / 20.58% = 8.23
      5000 iterations of incrementing a value by these 2 values should result in 40,000
    */
    if (props.currencySymbol) {
      this.currencySymbol = props.currencySymbol;
    }
    const nineteenPointFourThreePercent = 0.1943;
    const twentyPointFiveEightPercent = 0.2058;
    this.firstPriceIncrement = Number(parseFloat(props.incrementPrice * nineteenPointFourThreePercent).toFixed(2));
    this.alternatePriceIncrement = Number(parseFloat(props.incrementPrice * twentyPointFiveEightPercent).toFixed(2));

    this.state = {
      price: 0
    };
    this.increase = this.increase.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.increase, 200);
  }

  componentWillMount() {
    clearInterval(this.interval);
  }

  increase() {
    let priceIncrease = this.alternatePriceIncrement;
    if (this.alternateNumber) {
      priceIncrease = this.firstPriceIncrement;
      this.alternateNumber = false;
    }
    this.setState({price: this.state.price + priceIncrease});
  }

  render() {
    return (
      <div>{this.currencySymbol}{this.state.price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</div>
    );
  }
}

PriceTicker.propTypes = {
  incrementPrice: React.PropTypes.number.isRequired,
  currencySymbol: React.PropTypes.string
};

export default PriceTicker;
