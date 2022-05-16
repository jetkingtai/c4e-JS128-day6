// bài1

// let person = {
//   name:	'Bob',
//   occupation: 'web develope',
//   hobbies:	'painting',
//   };
// console.log(person.name);
// console.log(person['name']);
// for(key in person) {
//   console.log(person[key]);
// }
  

// bài2

// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };
// let arr = []
// for(key in obj) {
//   arr.push(key.toUpperCase());
// }
// console.log(arr);

// bài 3

// let myFamily = {
//   quantity: 4,
//   member: ["Dad", "Mom", "Me", "Daughter"],
//   location: "Vietnam",
// }

// let family = {}
// for(key in myFamily) {
//   family[key] = myFamily[key]
// }
// console.log(family);

// bài 4
// let obj = {
//   foo: { a: "hello", b: "world" },
//   bar: ["example", "mem", null, { xyz: 6 }, 88],
//   qux: [4, 8, 12]
//   };
// // cách 1 
// obj.bar[3].xyz = 606;
// console.log(obj)
// // cách 2
// obj['bar'][3].xyz = 606;
