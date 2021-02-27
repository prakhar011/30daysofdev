# Day8 

#### Learning solidity practically through cryptojombies things learned today are as follows 

##### when a code is deployed into blockchain it can not be change it is immutable because of which it is necessary to to make your program flawless
#### because if there will a fault then it can't be patch later.

##### whenever a certain action is performed on your program a certain amount is charged the amount charge is known as gas the  amount value depend on computational power required by it . Due to which it is expected to write a code which used less computational power to make it easy for client to use.

#### modifer function in solidity 

#### syntax:
 ```   function foo(uint a) onlyOwner(10)  {
    //do stuff
  }

    modifier onlyOwner(uint a   ) {
    require(a==10,'my error message');
    _;
  }
```
  [youtube](https://www.youtube.com/watch?v=RobaQulUzsY&list=PLbbtODcOYIoE0D6fschNU4rqtGFRpk3ea&index=26)


## Time Units 
####    Solidity provides some native units for dealing with time.

#### The variable now will return the current unix timestamp of the latest block (the number of seconds that have passed since January 1st 1970). The unix time as I write this is 1515527488.

#### in public function look for how user might exploit the function  
## Day9
#### [Loom Network](https://coinswitch.co/info/loom-network/what-is-loom-network):Loom Network is a blockchain-based platform designed with large-scale social apps and games in mind. The platform has been developed with the idea of proving that the applications of blockchain technology aren’t limited to transactions.

## Mapping
```
// A mapping to store a user's age:
mapping (uint => uint) public age;
```
## calldata 
#### it is similar to memory but it's only available in external

## View function 
# Shell
### view functions don't cost any gas when they're called externally by a user.This is because view functions don't actually change anything on the blockchain – they only read the data. So marking a function with view tells web3.js that it only needs to query your local Ethereum node to run the function, and it doesn't actually have to create a transaction on the blockchain

# Day10



# Day 11


