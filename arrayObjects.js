// get each of the values from the user input and set them respectively
let name = studentName.value;
let gpa = studentGPA.value;
let id = studentID.value;

let errors = []; // an empty array

if (!name) {
  // if there is no name:
  errors.push("Enter a student name");
}

if (!id) {
  errors.push("Enter student ID");
}

if (!gpa || gpa < 0 || gpa > 4) {
  // if gpa isn't real:
  errors.push("Enter GPA between 0 and 4");
}

if (errors.length > 0) {
  // if there is an error (valued at more than 0)
  let errorMsg = errors.join("\n"); // join each error found
  alert(errorMsg);
  return; // stop processing event
}
