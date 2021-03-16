// Binary Search Tree LCA
// HIDE QUESTION
// Have the function BinarySearchTreeLCA(strArr) take the array of strings stored in strArr, which will contain 3 elements: the first element will be a binary search tree with all unique values in a preorder traversal array, the second and third elements will be two different values, and your goal is to find the lowest common ancestor of these two values. For example: if strArr is ["[10, 5, 1, 7, 40, 50]", "1", "7"] then this tree looks like the following:

// For the input above, your program should return 5 because that is the value of the node that is the LCA of the two nodes with values 1 and 7. You can assume the two nodes you are searching for in the tree will exist somewhere in the tree.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function BinarySearchTreeLCA(strArr) {
  const numArr = strArr.map((item) => {
    return JSON.parse(item);
  });
  const arr = numArr[0];
  const max = Math.max(numArr[1], numArr[2]);
  const min = Math.min(numArr[1], numArr[2]);
  let LCA = min;
  for (i = arr.indexOf(min); i >= 0; i--) {
    if (min <= arr[i] && arr[i] <= max) {
      LCA = arr[i];
    }
  }
  return LCA;
}

// keep this function call here
BinarySearchTreeLCA(readline());
