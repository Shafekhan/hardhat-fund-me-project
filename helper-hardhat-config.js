const { network } = require("hardhat")

const networkConfig = {
    2442: {
        name: "polygonZkEVMTestnet",
        ethUsdPriceFeed: "0xd94522a6feF7779f672f4C88eb672da9222f2eAc",
    },
}

const developmentChains = ["hardhat", "localhost"]
const DECIMALS = 8
const INITIAL_ANSWER = 200000000000

module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER,
}
