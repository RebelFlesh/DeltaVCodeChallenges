# Kata Instructions

I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

Although this isn't explicately said in the instructions we were expected to return one string with each interation and line breaks in between.

# Our solution

Looking at this problem we need to loop over each string word by word and compair the letters. So off the bat we turn them into arrays and put them into a for loop. Inside of this for each letter we use an if statement to compair if the letter is the same. If they aren't we change the first and add the new joined word to our string and keep going. Our result is a string with a string transforming one letter at a time to the second.
