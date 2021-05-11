var averageOfLevels = function (root) {
  var res = [];
  if (!root) return res;
  var queue = [root];

  while (queue.length) {
    var size = queue.length;
    var sum = 0;
    for (let i = 0; i < size; i++) {
      var head = queue.shift();
      sum += head.val;
      if (head.left) queue.push(head.left);
      if (head.right) queue.push(head.right);
    }
    res.push(sum / size);
  }
  return res;
};

var averageOfLevels = function (root) {
  //     use queue becuase
  // it tells us how many els in current level
  // it does not push null node into queue

  const queue = [root];
  const res = [];

  while (queue.length) {
    const size = queue.length;
    // save queue's initial size before loop
    let sum = 0;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    res.push(sum / size);
  }

  return res;
};

let updateMatrix = (matrix) => {
  //     define res,
  //     use nest loop to set distance to each cell

  const res = new Array(matrix.length);
  for (let i = 0; i < matrix.length; i++) {
    res[i] = new Array(matrix[0].length).fill(0);
  }

  const DFS = (i, j) => {
    if (
      i < 0 ||
      j < 0 ||
      i >= matrix.length ||
      j >= matrix[0].length ||
      matrix[i][j] === Infinity
    )
      return Number.MAX_SAFE_INTEGER;
    //         if current is 0, return 0
    if (matrix[i][j] === 0) return 0;
    //         if any of nearest is 0 return 1
    if (i > 0 && matrix[i - 1][j] === 0) return 1;
    if (j > 0 && matrix[i][j - 1] === 0) return 1;
    if (i < matrix.length - 1 && matrix[i + 1][j] === 0) return 1;
    if (j < matrix[0].length - 1 && matrix[i][j + 1] === 0) return 1;

    //      otherwise, recursively call this fn
    let temp = matrix[i][j];
    matrix[i][j] = Infinity;
    const top = DFS(i - 1, j);
    const bottom = DFS(i + 1, j);
    const left = DFS(i, j - 1);
    const right = DFS(i, j + 1);
    matrix[i][j] = temp;

    const min = Math.min(top, bottom, left, right) + 1;
    return min;
  };

  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res[0].length; j++) {
      res[i][j] = DFS(i, j);
    }
  }

  return res;
};
