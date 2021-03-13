# Tokens
 
#### A token on etherum is basically smart contract with some rules. basically a token is just a contract that keeps track of who owns how much of that token, and some functions so those users can transfer their tokens to other addresses.

#### ERC721 tokens are not interchangeable since each one is assumed to be unique, and are not divisible. You can only trade them in whole units, and each one has a unique ID. So these are a perfect fit for making our zombies tradeable.

#### in solidity we can inherit multiple contracts 

## Blanceof

####syntax:
```
function balanceOf(address _owner) external view returns (uint256 _balance);
```

####This function simply takes an address, and returns how many tokens that address owns.

## Ownerof 

#### This function takes a token ID (in our case, a Zombie ID), and returns the address of the person who owns it.

## Overflow 
#### Let's say we have a uint8, which can only have 8 bits. That means the largest number we can store is binary 11111111 (or in decimal, 2^8 - 1 = 255).

#### Take a look at the following code. What is number equal to at the end?
```
uint8 number = 255;
number++;
```
#### In this case, we've caused it to overflow — so number is counterintuitively now equal to 0 even though we increased it. (If you add 1 to binary 11111111, it resets back to 00000000, like a clock going from 23:59 to 00:00).

#### An underflow is similar, where if you subtract 1 from a uint8 that equals 0, it will now equal 255 (because uints are unsigned, and cannot be negative).

#### While we're not using uint8 here, and it seems unlikely that a uint256 will overflow when incrementing by 1 each time (2^256 is a really big number), it's still good to put protections in our contract so that our DApp never has unexpected behavior in the future.

#### we can also use libraries in solidity.

## Asserts 

#### assert is similar to require, where it will throw an error if false. The difference between assert and require is that require will refund the user the rest of their gas when a function fails, whereas assert will not. So most of the time you want to use require in your code; assert is typically used when something has gone horribly wrong with the code (like a uint overflow).

