/*!**********************************************************!*
  Part 2:
    Change the code so that the Component class implements the
    Publish/Subscribe pattern. Clients should be able to register 
    for notifications using simple keys, e.g. propertyChanged,
    user.loggedOut, or any other event that might make sense in 
    an application.
 *!***********************************************************!*/

const {Component} = require('../../components');

const sharedTenantOperations = {
  logout() {
    console.log('User is successfully logged out');
  },
};

// Test case 1: We are creating a TENANCY_USER constructor(Object of the Component subject) with the logout method as suggest in the assignment, which
function Tenancy1() {
  if (!new.target) return new Tenancy1();
}
Object.assign(Tenancy1.prototype, sharedTenantOperations);

function Tenancy2() {
  if (!new.target) return new Tenancy2();
}
Object.assign(Tenancy2.prototype, sharedTenantOperations);

const tenancy1Object = Tenancy1();
const tenancy2Object = Tenancy2();

const subject = Component();
subject.subscribe(tenancy1Object);
subject.subscribe(tenancy2Object);

//Now lets register for logout action/notification which is the main task for part1
subject.logout();
