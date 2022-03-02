require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/T-rNbmUJGSXiACOV2w6UIPePbejiaWIF',
      accounts: [
        '37de2ec282354440b54ab1281c26feeae1634236dc9bb3db1452d40f57f78e32',
      ],
    },
  },
};
