function destroy(arr) {
  return arr.filter(el => ![...arguments].slice(1).includes(el));
}

console.log(destroy([1,2,3,1,2,3, 5, 4],1, 2,3));