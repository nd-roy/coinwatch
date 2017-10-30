// @flow

import { CALL_HANDLER } from '../../middleware/handler';
import { getCoinListApi, getCoinPriceApi, getExchangeListApi, getSymbolListApi } from '../../connectors/cryptocompare/api';

export const GET_COINS_ATTEMPT = 'GET_COINS_ATTEMPT';
export const GET_COINS_SUCCESS = 'GET_COINS_SUCCESS';
export const GET_COINS_FAILURE = 'GET_COINS_FAILURE';

export function getCoins() {
  return {
    [CALL_HANDLER]: {
      types: [GET_COINS_ATTEMPT, GET_COINS_SUCCESS, GET_COINS_FAILURE],
      handler: getCoinListApi,
    },
  };
}

export const GET_COIN_PRICE_ATTEMPT = 'GET_COIN_PRICE_ATTEMPT';
export const GET_COIN_PRICE_SUCCESS = 'GET_COIN_PRICE_SUCCESS';
export const GET_COIN_PRICE_FAILURE = 'GET_COIN_PRICE_FAILURE';

export function getCoinPrice({ coin, to, exchange }) {
  const data = {
    from: coin.Symbol,
    to,
    exchange,
  };

  return {
    [CALL_HANDLER]: {
      types: [GET_COIN_PRICE_ATTEMPT, GET_COIN_PRICE_SUCCESS, GET_COIN_PRICE_FAILURE],
      handler: getCoinPriceApi,
      data,
    },
  };
}

export const GET_EXCHANGE_LIST_ATTEMPT = 'GET_EXCHANGE_LIST_ATTEMPT';
export const GET_EXCHANGE_LIST_SUCCESS = 'GET_EXCHANGE_LIST_SUCCESS';
export const GET_EXCHANGE_LIST_FAILURE = 'GET_EXCHANGE_LIST_FAILURE';

export function getExchangeList() {
  return {
    [CALL_HANDLER]: {
      types: [GET_EXCHANGE_LIST_ATTEMPT, GET_EXCHANGE_LIST_SUCCESS, GET_EXCHANGE_LIST_FAILURE],
      handler: getExchangeListApi,
    },
  };
}

export const GET_SYMBOL_LIST_ATTEMPT = 'GET_SYMBOL_LIST_ATTEMPT';
export const GET_SYMBOL_LIST_SUCCESS = 'GET_SYMBOL_LIST_SUCCESS';
export const GET_SYMBOL_LIST_FAILURE = 'GET_SYMBOL_LIST_FAILURE';

export function getSymbolList() {
  return {
    [CALL_HANDLER]: {
      types: [GET_SYMBOL_LIST_ATTEMPT, GET_SYMBOL_LIST_SUCCESS, GET_SYMBOL_LIST_FAILURE],
      handler: getSymbolListApi,
    },
  };
}
