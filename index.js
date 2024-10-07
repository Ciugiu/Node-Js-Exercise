console.log('test from Node');

// Create an object student:

const Student = {
  name : "Marie",
  age : 20,
  courses : [],
};

console.log(Student);

// Access and modify the object's values:

Student.age = 21;
Student.grade = "A";

// Work with the courses array of the object:

Student.courses.push("Math", "Physiscs", "Chemistry");
const indexSearch = Student.courses.indexOf("Physiscs");
const slicedList = Student.courses.slice(0, 2);

// Display the results:
console.log(Student);
console.log(indexSearch);
console.log(slicedList);