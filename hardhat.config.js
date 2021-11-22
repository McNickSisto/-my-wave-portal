require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/KZLvChn-KFv6fPhRbC4g6V_QemNTBwwF',
      accounts: ['a97e798496c5ce7f90e35e516b3836bc8046027e8e6252ab4b4a310ac7513d50'],
    },
  },
};