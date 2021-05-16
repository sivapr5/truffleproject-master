const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = '9311ad9b8a4c4047bdddf7a4625dc5dc';

const fs = require('fs');
const mnemonic = fs.readFileSync('.secret').toString().trim();

module.exports = {
  // see <http://truffleframework.com/docs/advanced/configuration>
  compilers: {
    solc: {
      version: "0.8.0", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
  networks: {
    // development: {
    //   host: "127.0.0.1",
    //   port: 7545,
    //   network_id: "*",
    // },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`);
      },
      network_id: '3',
      gas: '5500000'
    },
  },
};
