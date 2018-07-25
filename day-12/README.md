#KATA Instuctions
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

#Our solutions
My partner and I decided that the best way to go about this was to use codePointAt to get the values. From here we needed to realize that we needed two loops. One to go through the sentence, another to go through each letter and find it's value. Next we sumed for each word and found the index that the highest scoring word was in. So for the solution we simply returned the word in that index.