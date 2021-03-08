// Seating Students
// Have the function SeatingStudents(arr) read the array of integers stored in arr which will be in the following format: [K, r1, r2, r3, ...] where K represents the number of desks in a classroom, and the rest of the integers in the array will be in sorted order and will represent the desks that are already occupied. All of the desks will be arranged in 2 columns, where desk #1 is at the top left, desk #2 is at the top right, desk #3 is below #1, desk #4 is below #2, etc. Your program should return the number of ways 2 students can be seated next to each other. This means 1 student is on the left and 1 student on the right, or 1 student is directly above or below the other student.

// For example: if arr is [12, 2, 6, 7, 11] then this classrooms looks like the following picture:

// Based on above arrangement of occupied desks, there are a total of 6 ways to seat 2 new students next to each other. The combinations are: [1, 3], [3, 4], [3, 5], [8, 10], [9, 10], [10, 12]. So for this input your program should return 6. K will range from 2 to 24 and will always be an even number. After K, the number of occupied desks in the array can range from 0 to K.
// Examples
// Input: [6, 4]
// Output: 4
// Input: [8, 1, 8]
// Output: 6
// Tags
// arraygraphcombinatoricsGoogle

function SeatingStudents(arr) {
  // code goes here

  if (arr.length < 1) return -1;

  //Number of valid pairs
  var count = 0;

  //Number of students; first number in the array
  var n = arr[0];

  //Now remove the first number from the array so we only have
  arr.splice(0, 1);

  //For each seat
  for (var i = 1; i < n; i++) {
    //Skip seats that are already assigned
    if (arr.includes(i)) continue;

    //If i is even (it's on the right side)
    if (0 === i % 2) {
      //Check the seat below; if it's free, that's a valid pair
      if (i + 2 <= n && !arr.includes(i + 2)) count++;

      //Otherwise, it's odd and on the left side
    } else {
      //Check the seat to the right; if it's free, that's a valid pair
      if (i + 1 <= n && !arr.includes(i + 1)) count++;

      //Check the seat below; if it's free, that's a valid pair
      if (i + 2 <= n && !arr.includes(i + 2)) count++;
    }
  }

  //Return the number of results found
  return count;
}

// keep this function call here
SeatingStudents(readline());
