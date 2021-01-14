interface user {
  name: string;
  age: number;
}

let user1 = {
  name: "julie",
  age: 27,
};

function printUser1(person: user) {
  console.log(person.name);
}

console.log(printUser1(user1));
