#Kata Instructions
Today we were given the instuctions to reverse a string.

#Our Approach
My partner and I actually coded differently so he made solution 2 where I went with 1.
Essentually we agreed on the process, we need to trun the stirng into an array, reverse it with the reverse method, then combine it back into a string that we would return.
As I did it I didnt use join method but instead the toString method. This gave my solution the issue that was the commas were included. To solve this I used the replace method and wrote a regular expression that selected the commas and replaced it with an empty string which removed it.