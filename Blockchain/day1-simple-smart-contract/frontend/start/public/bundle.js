var contractABI = [];
var contractAddress ='0x8f2b4EA157617Dd5903A7Afbb1497e0314417B24';
var web3 = new Web3(Web3.givenProvider || 'https://localhost:9545')
var simpleSmartContract = new web3.eth.Contract(contractABI,contractAddress);

console.log(simpleSmartContract)

web3.eth.getAccounts()
.then(console.log);

