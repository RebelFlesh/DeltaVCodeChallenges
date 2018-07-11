##Kata Instructions
This activity asked for us to write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

###Our solution
For this we decided that we needed to have a function that took an integer, turn it into a string and check the indivisual characters to see if two odd numbers were adjacent. If they were it added a dash in between them.
Here we actually hard coded an array of odd numbers as strings to compare.