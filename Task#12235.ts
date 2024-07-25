function strigify(num: number | string): string {
  return JSON.stringify(num);
}
console.log(strigify(10));
