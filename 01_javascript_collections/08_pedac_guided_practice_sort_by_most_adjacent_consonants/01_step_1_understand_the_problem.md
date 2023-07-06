# PEDAC Guided Practice: Sort by Most Adjacent Consonants

## Problem Statement

Given an array of strings, return a new array where the strings are sorted to the highest number of adjacent consonants a particular string contains. If two strings contain the same highest number of adjacent consonants they should retain their original order in relation to each other. Consonants are considered adjacent if they are next to each other in the same word or if there is a space between two consonants in adjacent words.

## Tasks

You are provided with the problem description above. Your tasks for this step are:

To make notes of your mental model for the problem, including explicit and implicit rules
Write a list of questions for things that aren't clear about the problem from the description provided

## P: Understanding The Problem

### Clarification:
You will be provided an array that contains string elements. 
You are to return a new array of the same strings but the array should be sorted to list the strings to the highest number of adjacent consonants a particular string contains.
If two strings contain the highest number of adjacent consonants they should retain the original order in which the two strings were in related to each other.

### Rules & Requirements:

Input: Array (of strings)
Output: New Array (of sorted strings)
Rules:
  #### Explicit:
  - if two strings contain the highest number of adjacent consonants they retain their order relative to each other
  - Consonants are adjacent if they are next to each other in the same word
  - Consonants are adjacent if there is a space between two consonants in adjacent words

  #### Implicit:
  - array will contain only strings always
  - strings can have more than one word

### Examples:

['try', 'amazing', 'cat', 'dog']

|startingOrder      |string   |adjacentConsoCount |
|:------------------|:--------|:------------------|
|0                  |try      |3 (t, r, y)        |
|1                  |amazing  |2 (n, g)           |
|2                  |cat      |0                  |
|3                  |dog      |0                  |

|sortToHighestOrder |string   |adjacentConsoCount |
|:------------------|:--------|:------------------|
|0                  |cat      |0                  |
|1                  |dog      |0                  |
|2                  |amazing  |2 (n, g)           |
|3                  |try      |3 (t, r, y)        |


### Questions:
- what direction should the array be sorted in, ascending or descending?
- are empty strings included?
- will strings contain more than 1 word?
- will strings with no adjacent consonants be included?
- what is meant by space between two consonants in adjacent words?