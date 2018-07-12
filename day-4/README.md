#Kata Description
Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).

##Our Solution
The largest challenge of this was writing the regular expression.
We easily found out that we could use [a-z0-9_] to get the accepted characters. Next we needed to find out how to limit the amount of characters. {4,16} will do this but we couldnt find the anchors ^ or $. After we found that it was a matter of putting the string together. 