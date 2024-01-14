function diffArray(arr1, arr2) {
  const union = new Set([...arr1, ...arr2]);

  const unique = [];

  for (const currentEl of union) {
      if (arr1.includes(currentEl) && !arr2.includes(currentEl)) {
          unique.push(currentEl);
      } else if (!arr1.includes(currentEl) && arr2.includes(currentEl)) {
          unique.push(currentEl);
      }
  }

  return unique;
}

console.log(diffArray([1, 2, 3, 4], [8, 3, 4, 5, 6]));
