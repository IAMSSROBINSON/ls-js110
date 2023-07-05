# Step 1: Understand The Problem

<br>

## Problem Statement

You have a number of building blocks that can be used to build a valid structure. There are certain rules about what determines the validity of a structure:

- The building blocks are cubes
- The structure is built in layers
- The top layer is a single block
- A block in an upper layer must be supported by four blocks in a lower layer
- A block in a lower layer can support more than one block in an upper layer
- You cannot leave gaps between blocks

Write a program that, given the number for a specific amount of cubes, calculates the number of blocks left over after building the tallest possible valid structure.

<br>

## Tasks

You are provided with the problem description above. Your tasks for this step are:

To make notes of your mental model for the problem, including explicit and implicit rules
Write a list of questions for things that aren't clear about the problem from the description provided

<br>

## PEDAC

### P: Understanding The Problem

CLARIFICATION
You will be provided with an amount of blocks/cubes to build a structure, write a program that calculates how many blocks/cubes are left over after building the tallest possible 'valid' structure.

INPUT: int (number of cubes provided)
OUTPUT: int (remainder of cubes after building tallest 'valid' structure)

RULES & REQUIREMENTS

EXPLICIT:
- build structure out of layers with blocks on each layer
- building blocks are cubes
- the top layer is '1' single block
- a block/cube in an upper layer must be supported by four blocks / cubes in a lower layer
- a block in a lower layer can support more than one block in an upper layer
- you cannot leave gaps between blocks
- build the tallest structure possible with given blocks


IMPLICIT: 
- the top cube is always 1 cube
- Tallest valid structure is the structure that takes up the most layers conforming to the rules
- second layer will contain at least 4 blocks


QUESTIONS:
- what is a structure?
- what is a block/cube?
  - a number squared? n**2
- how is a block/cube represented?
  - as the current layer number**2
- what is a layer?  
  - the current step in the process of laying blocks
- are layers all the same height?
  - n/a
- are blocks all the same size?
  - a block is a block, there can be more than 1 block
- for every 1 block that exists on an upper layer there must be 4 blocks that represent each block in the layer beneath? Is that a 1:4 ratio?
  - no each 1 block that exists on an upper layer does not command 4 blocks in a lower layer
- what does a gap between blocks mean?
  - you cannot skip any steps in the process the block count must get larger from top down to support upper blocks
- how can a block in a lower layer support more than 1 block in an upper layer?
  - the blocks on the base must be higher than the blocks that appear above it
- Can I have an example 
  - figure it out
- What is a valid structure?
  - you must meet the conditions
- What is an invalid structure?
  - when the conditions are not met
- Will there always be enough blocks for a valid structure?
  - see test cases
- If not what should be done with the number of blocks?
  - see test cases

EXAMPLE:

layer 1 => 1 block
layer 2 => 4 blocks (4 blocks supporting 1 block in upper layer)
layer 3 => 9 blocks
layer 4 => 16 blocks

Row number multiplied by itself equals the required amount of blocks

