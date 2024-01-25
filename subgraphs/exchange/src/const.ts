import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const NULL_CALL_RESULT_VALUE = '0x0000000000000000000000000000000000000000000000000000000000000001'
export const ADDRESS_ZERO = Address.fromString('0x0000000000000000000000000000000000000000')
export const BIG_INT_ONE = BigInt.fromI32(1)
export const BIG_DECIMAL_ZERO = BigDecimal.fromString('0')
export const BIG_INT_ZERO = BigInt.fromI32(0)
export const BIG_DECIMAL_ONE = BigDecimal.fromString('1')
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString(
  '0.0005'
)
export const NATIVE = Address.fromString(
  '0x0000000000000000000000000000000000000000'
)
export const DAI = '0x50c5725949a6f0c72e6c4a641f24049a917db0cb'
export const USDT = '0x0000000000000000000000000000000000000000'
export const USDC = '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913'
export const SUSHI_USDT_PAIR =
  '0x0000000000000000000000000000000000000000'
export const DAI_WETH_PAIR =
  '0x0000000000000000000000000000000000000000'
export const USDT_WETH_PAIR =
  '0x0000000000000000000000000000000000000000'
  export const USDC_WETH_PAIR =
  '0x482Fe995c4a52bc79271aB29A53591363Ee30a89'



export const FACTORY_ADDRESS = Address.fromString(
  '0x71524B4f93c58fcbF659783284E38825f0622859'
)

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString("5")

export const WHITELIST: string[] = [
  "0x50c5725949a6f0c72e6c4a641f24049a917db0cb",
  "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
  "0xC48E605c7b722a57277e087a6170B9E227e5AC0"
];//'{{ whitelist }}'.split(',')