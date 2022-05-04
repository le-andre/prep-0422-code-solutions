
var person = {

  firstName: 'Andre',
  lastName: 'Le',
  hobby: 'Photography'
};
console.log(person);

var fullName = (person.firstName + ' ' + person.lastName);

console.log('The persons name is:', fullName);

person.job = 'Audio Video Technician';

console.log('This persons current job is:', person.job);

person.previousJob = 'student';

console.log('This persons previous job is:', person.previousJob);
