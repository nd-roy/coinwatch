import React, { Component } from 'react';
import { connect } from 'react-redux';
import { forEach, map, find } from 'lodash';
import { getCoinPrice } from '../coins/actions';

class Tray extends Component {
  constructor() {
    super();
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    setInterval(this.refresh, 10000);
  }

  refresh() {
    forEach(this.props.coins, (coin) => {
      return this.props.getCoinPrice(coin);
    });
  }

  render() {
    return <div />;
  }
}

function mapStateToProps({ settings, coins }) {
  console.log('--------------------------------------');
  console.log(settings.coins, coins);
  console.log('--------------------------------------');
  return {
    coins: settings.coins,
    prices: coins.prices,
  };
}

export default connect(mapStateToProps, { getCoinPrice })(Tray);
