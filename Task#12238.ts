class Dog {
  name: string;
  age: number;
  breed: string;
  constructor(name: string, age: number, breed: string) {
    this.name = name;
    this.breed = breed;
    this.age = age;
  }
}
class Cat {
  name: string;
  age: number;
  breed: string;
  constructor(name: string, age: number, breed: string) {
    this.name = name;
    this.breed = breed;
    this.age = age;
  }
}

const animals: object[] = [
  new Dog("abc", 10, "xyz"),
  new Cat("random", 4, "random"),
  new Dog("xyz", 5, "abc"),
];

const filterDogs = (array: object[]): object[] => {
  let ans: object[] = [];
  array.forEach((e) => {
    if (e instanceof Dog) {
      ans.push(e);
    }
  });
  return ans;
};
console.log(filterDogs(animals));
// do with generic
