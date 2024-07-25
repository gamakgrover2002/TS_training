interface Person {
  name: string;
  age: number;
}
let obj: Person = {
  name: "abc",
  age: 10,
};

function descibePerson(person: Person): void {
  let { name, age } = person;
  console.log(`Name: ${name},Age: ${age}`);
}
descibePerson(obj);
