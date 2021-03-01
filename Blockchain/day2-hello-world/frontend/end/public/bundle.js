var Web3 = require('web3');
var helloWorldABI =  [
    {
      "constant": true,
      "inputs": [],
      "name": "hello",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }
  ],

var helloWorldAddress = '0x40736D6150F18DA8EA3F6A798D529D2414D2666D';
var web3 = new Web3(Web3.givenProvider || 'https://localhost:9545')

var helloWorld = new web3.eth.Contract(helloWorldABI, helloWorldAddress);

document.addEventListener('DOMContentLoaded', () => {
  helloWorld.methods.hello().call()
  .then(result => {
    document.getElementById('hello').innerHTML = result;
  });
});
