/*!**********************************************************!*
  Part 3:
  Extending your answer to Part 2, suppose we now want to 
  allow clients to receive notifications even if they 
  registered themselves after such notification had been 
  broadcast. Provide a simple implementation, noting any 
  potential performance concerns
 *!***********************************************************!*/
const {Component} = require('../../components');

const sharedStudentActionsMixin = {
  signUpStudent(data = {}) {
    console.log(`Successfully sign up student using this data/// ${JSON.stringify(data)}`);
  },
};

function CollegeStudent() {
  if (!new.target) return new CollegeStudent();
}
Object.assign(CollegeStudent.prototype, sharedStudentActionsMixin);

function UniversityStudent() {
  if (!new.target) return new UniversityStudent();
}
Object.assign(UniversityStudent.prototype, sharedStudentActionsMixin);

const subject = Component();

const collegeObject = CollegeStudent();

//Registering a college student by themselves
collegeObject.signUpStudent({
  type: 'College',
  name: 'Test User',
  department: 'Science',
  school: 'Blocket college',
});

const universityObject = UniversityStudent();

subject.subscribe(collegeObject);

subject.subscribe(universityObject);

//Now lets register for logout action/notification which is the main task for part1
subject.sigUpStudent({type: 'College', name: 'Test User', department: 'Science', school: 'Blocket college'});

/************************************************************************************************************************
 * Performance concerns are:
 * 1. Ones we run a signup operation supposedly for a university student, it unnecessary create that same user on other
 * system e.g college system. We could solve that by constructing the data to include type(e.g. "type="College") with
 * this denotation we decide which program to run
 *
 * 2. Another issue apart from performance could be "Accuracy", since signUpStudent action doesn't have
 * a single source of truth due to the fact that "the client" could be executing it themselves, that calls
 * for an alarm whether the student have been signed-up already by the client or the Publisher
 ************************************************************************************************************************/
