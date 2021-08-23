require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remember smile hidden clog off symbol'; 
let testAccounts = [
"0x339fcbdffd27d5bc5c16711af87c2ad9ca7e8aab42fd309a3cfbde3864150fbb",
"0x10368d756300e1c53eaab6a70baebef94a8cdf3480a06ba809d3a6986e3ec5e4",
"0xc065f2f64b1f2df5d88f3e53294b77654c0fbe9f8357db38319210e9386a588f",
"0x34ce4134fa920e6e56ededbb31e737147f81a391df611c377766049cc9239a35",
"0xb4ea0ade3e0b974f03ab19e5cea8ea4d9d65a5d1dd4618c9cd63096814f9d5d6",
"0x2e92c86371e7865788b35a23aa9fa02a7f00a0c8bf78e43b5253147eb7e45c7b",
"0x8d3834d0a481dd4165b9210913210a00a54e5a34d41ab4caf1d224c30bd0e81f",
"0x83d329f453aebd8719e04ff598116e23010c08aab7125378b59a6ec3afe7767b",
"0xb822a61982226cbec6fd5b93c07892f3296abdfac2fa931031c1b20ac9bbddb0",
"0x7801fe76e8b77afd09e143e2d598e49ad0d1c41e7126b30f82332bd55302d171"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

