require("hardhat-deploy")
require("@nomiclabs/hardhat-ethers")
require("@typechain/hardhat")
require("hardhat-gas-reporter")
require("solidity-coverage")
require("@nomiclabs/hardhat-ethers")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */

const Polygon_RPC_URL = process.env.RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.API_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY

module.exports = {
    solidity: {
        compilers: [{ version: "0.6.12" }, { version: "0.8.27" }],
    },
    defaultNetwork: "hardhat",
    namedAccounts: {
        deployer: {
            default: 0, // Use the first account as deployer
        },
    },
    networks: {
        hardhat: {
            chainId: 1337,
        },
        localhost: {
            url: "http://127.0.0.1:8545",
        },
        polygonZkEVMTestnet: {
            url: Polygon_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 2442,
            blockConfirmations: 6,
        },
    },
    etherscan: {
        apiKey: {
            polygonZkEVMTestnet: ETHERSCAN_API_KEY,
        },
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKETCAP_API_KEY,
        token: "MATIC",
    },
    typechain: {
        outDir: "types",
        target: "ethers-v5",
    },
}
