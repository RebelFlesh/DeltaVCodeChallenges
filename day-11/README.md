#KATA instructions
Find the sum of the odd numbers within an array, after cubing the initial integers. This function will return undefined (NULL in PHP) if any of the values aren't numbers.

#Our solutions
We decided that the key steps in this kata were to filter out all of the even numbers in the given array. Cube every element, then sum the numbers using a reduce.