require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inflict forget force sugar guard render remember evil good private blue gift'; 
let testAccounts = [
"0x4fb85236078b061ace23111a08658fde6842c82442936f63c4e75601d78591b1",
"0x57ff69e4b992d72354243f7e3306fb914df777a9462ab7be4a66b2dec0ffe2eb",
"0xee1b6eed773e98517e6f2086cf8d22b9c28cafae91aa1e71f8035ca56140fb05",
"0x3b3b87b71aff267f18aebe6d856003084faff496ccb4d2cf932d543f7b5cd116",
"0xb6b9e7db384ff78ce27381a9da32161180af101ee54658aae3ec8cea682b9521",
"0xc1b252878a352b1ce5656173cfb0c9bae196c6ea4c666a97f8706578df5d0323",
"0x5eed59cb4074b82abfbacd6b376d2bd7b02ecf627be232c9c255999795452a09",
"0xc869814289e5a4833ce6a290f7cfc7721e03e67a63d219e38621c8245a2a2a4b",
"0x122c64b1848e3d4d40079cd2f85834213e8c3f8bfe73587f5d8972923e3c2265",
"0x84bc9ffcb6303102b42d47841fedf6b8ee10b3299a320e6f54b27e9001c47e50"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


