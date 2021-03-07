function LongestIncreasingSequence(arr) {
  var subSequences = [];
  for (var i = 0; i < arr.length; i++) {
    var holder = [arr[i]];
    for (var x = i + 1; x < arr.length; x++) {
      if (arr[x] > holder[holder.length - 1]) {
        holder.push(arr[x]);
      } else if (
        arr[x] > holder[holder.length - 2] &&
        arr[x] < holder[holder.length - 1]
      ) {
        holder[holder.length - 1] = arr[x];
      }
    }
    subSequences.push(holder);
  }
  var subSequenceLengths = subSequences
    .map(function (x) {
      return x.length;
    })
    .sort(function (x, y) {
      return x - y;
    });
  return subSequenceLengths.pop();
}

console.log(LongestIncreasingSequence([10, 12, 4, 6, 100, 2, 56, 34, 79]));
