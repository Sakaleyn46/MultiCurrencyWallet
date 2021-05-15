import config from 'app-config'
import UTXOToEthToken from '../UTXOSwap/UTXOToEthToken'
import EthTokenToUTXO from '../UTXOSwap/EthTokenToUTXO'
import UTXOToEthLike from '../UTXOSwap/UTXOToEthLike'
import EthLikeToUTXO from '../UTXOSwap/EthLikeToUTXO'


const UTXO_to_ERC20 = (coinName) => {
  class _UTXO_to_ERC20 extends UTXOToEthToken {
    constructor(props) {
      super({
        ...props,
        fields: {
          currencyName: coinName,
          ...config.swapConfig[coinName],
        },
      })
    }
  }
  return _UTXO_to_ERC20
}

const ERC20_to_UTXO = (coinName) => {
  class _ERC20_to_UTXO extends EthTokenToUTXO {
    constructor(props) {
      super({
        ...props,
        fields: {
          currencyName: coinName,
          ...config.swapConfig[coinName],
        },
      })
    }
  }
  return _ERC20_to_UTXO
}

const UTXO_to_ETH = (coinName) => {
  class _UTXO_to_ETH extends UTXOToEthLike {
    constructor(props) {
      super({
        ...props,
        fields: {
          currencyName: coinName,
          ethLikeCoin: `ETH`,
          ...config.swapConfig[coinName],
        },
      })
    }
  }
  return _UTXO_to_ETH
}

const UTXO_to_BNB = (coinName) => {
  class _UTXO_to_BNB extends UTXOToEthLike {
    constructor(props) {
      super({
        ...props,
        fields: {
          currencyName: coinName,
          ethLikeCoin: `BNB`,
          ...config.swapConfig[coinName],
        },
      })
    }
  }
  return _UTXO_to_BNB
}

const ETH_to_UTXO = (coinName) => {
  class _ETH_to_UTXO extends EthLikeToUTXO {
    constructor(props) {
      super({
        ...props,
        fields: {
          currencyName: coinName,
          ethLikeCoin: `ETH`,
          ...config.swapConfig[coinName],
        },
      })
    }
  }
  return _ETH_to_UTXO
}

const BNB_to_UTXO = (coinName) => {
  class _BNB_to_UTXO extends EthLikeToUTXO {
    constructor(props) {
      super({
        ...props,
        fields: {
          currencyName: coinName,
          ethLikeCoin: `BNB`,
          ...config.swapConfig[coinName],
        },
      })
    }
  }
  return _BNB_to_UTXO
}

export {
  UTXO_to_ERC20,
  ERC20_to_UTXO,
  UTXO_to_ETH,
  ETH_to_UTXO,
  UTXO_to_BNB,
  BNB_to_UTXO,
}