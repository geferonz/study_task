function find(arr1, arr2) {
  let results = [];

  let first = doubles(arr1);
  let second = doubles(arr2);
  
  for (let i = 0; i < first.length; ++i) {
    if (second.includes(first[i])) {
      results.push(first[i]);
    }
  };

  function doubles(arr) {
    let result = {};

    for (let i = 0; i < arr.length; ++i) {
      let a = arr[i];
      result[a] = result[a] + 1 || 1;
    };
    
    return Object.keys(result).filter((item) => result[item] > 1);
  };
  
  return results;
}
