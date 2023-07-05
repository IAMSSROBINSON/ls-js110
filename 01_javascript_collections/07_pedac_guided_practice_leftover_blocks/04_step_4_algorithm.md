# Algorithm

Use analysis of the problem to write out a high level algorithm that solves the problem at an abstract level. Avoid a lot of implementation detail.

Imagine you are using a pen and paper and trying to solve the problem with these tools. 

This can be a very high level sentence to start with before breaking it down further and describing it more programmatically in terms of patterns like loops and conditional statements. Do not think at the code level just yet. 

<br>

## PEDAC

### A: Algorithm

Build the structure one layer at a time until there are not enough blocks to build a layer.

- to start receive the given total amount of blocks input
- if 0 then return 0

- remaining blocks = total blocks input
- to get the blocks for the first layer
  - multiply the row number by itself and set this many blocks
  - 1 x 1 = 1

- subtract the result from remaining blocks
- if the remaining blocks is greater or equal to the current layer+1 multiplied by itself then create the next layer
- if not then return the remaining blocks

- to get the second layer (it must be 4 blocks)
- multiply the layer number(2) by itself and set this many blocks
- 2 x 2 = 4

- subtract the result from remaining blocks
- if the remaining blocks is greater or equal to current layer+1 multiplied by itself then create the next layer
- if not then return the remaining blocks

- repeat these steps  

TEST CASE:

total blocks: 5
remaining blocks is equal to total blocks

remaining blocks(5) is greater than 0 so proceed to loop

start on current layer => 1
1 x 1 = 1 block, place the block
subtract 1 block from remaining blocks(5 - 1 = 4)
if remaining blocks(4) is greater than (currenLayer(1) + 1(2)) * itself(2x2=4), go to next layer
if not then return the remaining blocks

current layer => 2
2 x 2 = 4 blocks, place the blocks
subtract 4 blocks from remaining blocks(4 - 4 = 0)
if remaining blocks(0) is greater than (currenLayer(2) + 1(3)) * itself(3x3=9), go to next layer
if not then return the remaining blocks => return remaining blocks(0)


