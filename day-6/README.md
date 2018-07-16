##Kata Instructions
A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.

##Our Solution
My partner and I instantly saw a for loop in this. Essentually we needed to go through every index of the array and check individually if either n+1 or n-1 existied as well. After that it was a matter of writing an if statment to see if all of the numbers had one of those, give true, else false.