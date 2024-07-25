const doubleArray = (array: number[]): number[] => {
  return array.map((e) => {
    return 2 * e;
  });
};
let array: number[] = [1, 2, 3];
let arr2 = doubleArray(array);
console.log(arr2);
