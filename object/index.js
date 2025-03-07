let students = [
  {
    name: "vishal",
    number: 453465465,
    course: "full stack",
    status: "running",
  },
  {
    name: "vishal",
    number: 453465465,
    course: "full stack",
    status: "running",
  },
  {
    name: "vishal",
    number: 453465465,
    course: "full stack",
    status: "running",
  },
];

// console.log(typeof students);

let student = {
  name: "vishal",
  number: 453465465,
  course: "full stack",
  status: "running",
  add: {
    state: "gujarat",
    city: "surat",
    houseNumber: 107,
  },
  skills: ["react", "node", "html", "js", "mongodb"],
  friends: [
    {
      name: "ankit",
      course: "full stack",
      number: 453454654,
    },
    {
      name: "jigar",
      course: "backend",
      number: 453654,
    },
    {
      name: "urvesh",
      course: "frontend",
      number: 345646547,
    },
  ],
};
// let skills = ["react", "node", "html", "js", "mongodb"];
// console.log(student.skills[]);

// json
// let n = student.skills.length;
// for (let i = 0; i < n; i++) {
//   console.log(student.skills[i]);
// }

console.log(student.friends[2].name);
