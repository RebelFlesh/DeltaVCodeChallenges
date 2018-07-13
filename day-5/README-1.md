##Kata instructions
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

##Our solutions
For this activity all we needed was a regex. From the other day we learned we could set the accepted characters just numbers.
The only real challenge was it needed 4 or 6 characters.
essentually we found the or opperators was best and combined two different regexes.