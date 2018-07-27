# Kata Instructions

Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.

#Our solutions

My partner and I broke this into three steps. First off we needed to change the string into an array. Next we needed to loop through each letter and check to see if this letter was in one of the specified indeces. If it was we needed to capitalize it otherwise move to the next letter. Once we were at the end we simply joined the array together to get our result.
