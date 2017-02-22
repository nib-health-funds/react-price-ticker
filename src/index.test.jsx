/* global expect, render, $, it, describe */
import React from 'react';
import PriceTicker from './index';

describe('PriceTicker', () => {
  describe('increase()', () => {

    it('should increase by 7.77 when alternateNumber=true and incrementPrice=40', () => {
      const component = render(<PriceTicker incrementPrice={40}/>).component;
      component.alternateNumber = true;
      component.increase();
      expect(component.state.price).to.be.equal(7.77);
    });

    it('should increase by 8.23 when alternateNumber=false and incrementPrice=40', () => {
      const component = render(<PriceTicker incrementPrice={40}/>).component;
      component.alternateNumber = false;
      component.increase();
      expect(component.state.price).to.be.equal(8.23);
    });
  });

  describe('render()', () => {
    it('should render component PriceTicker with a $ symbol as default', () => {
      const element = render(
        <PriceTicker incrementPrice={40}/>
      ).element;
      expect($(element).props().children[0]).to.contain('$');
    });

    it('should render component PriceTicker with a $ symbol when one is passed in', () => {
      const element = render(
        <PriceTicker incrementPrice={40} currencySymbol="$"/>
      ).element;
      expect($(element).props().children[0]).to.contain('$');
    });

    it('should render component PriceTicker with a £ symbol when one is passed in', () => {
      const element = render(
        <PriceTicker incrementPrice={40} currencySymbol="£"/>
      ).element;
      expect($(element).props().children[0]).to.contain('£');
    });

    it('should render component PriceTicker with starting value of $0.00', () => {
      const element = render(
        <PriceTicker incrementPrice={40}/>
      ).element;
      expect($(element).props().children[0]).to.contain('$');
      expect($(element).props().children[1]).to.contain('0.00');
    });

  });
});
