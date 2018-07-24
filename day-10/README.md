#Kata instructions

1.Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array. Your solution must use the map() function of the built-in javascript Array object.

2.In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

3.Write function avg which calculates average of numbers in given list.

#Our solutions

1.On this first one, It was very guided because we were told we must use the map method.
So looking at map we needed a callback that would adjust the array. Since the callback was simply double evey index, it was easy to write. And we returned the product.

2.The second we were told to filter out indexes in our array that didnt have integers in it.
Like the last, it was straight forword with filter to check if the index was an array.
Then we returned the product of filter.

3.Finally the third we needed to find the averages. We figured using reduce would be the best way to turn the array into a solid integer. And knowing that averages were calculated by finding the sum of numbers and dividing by the amount of numbers, we put this as the callback which got us our result.
