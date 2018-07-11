##In the Kata:
We were asked to "Write a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:
Sam Harris => S.H
Patrick Feeney => P.F"

To go about this my partner and I looked at string methods to solve this.
To find the first we just grabed the first character.
Next we needed to find the second letter, because we are taking a different length of names we cant just look at the fourth or sixth letter.
We noticed because there is a space in all the names, we can find the space and grab the letter to the right of it instead.
After we have both letters we just build a string that becomes S.H for example.