# Data Structures

For this step, with reference to your analysis from the two preceding steps, make some notes regarding whether you might need to use any particular data structures as part of your solution, and if so, which ones.

<br>

## PEDAC

### D: Data Structures

Because we are dealing with a structure of layers which can contain 1 or more blocks and the structure needs to be stable in that it should contain no gaps I would suggest an array data structure to represent the data.

Since arrays are ordered lists it might be easier to think of the overall structure as an initial array with each layer within the initial array being represented by another array.

We can determine the hight of the structure by how many nested arrays appear in the initial array.