/*!**********************************************************!*
  Part 4:
    Define a CustomComponent that extends Component. It should
    have a setValue method which broadcasts an event when it
    is called, specifying the old and new values.
 *!***********************************************************!*/

const {Component} = require('../../components');

//The custom component that broadcasts an event when it is called, specifying the old and new values
function StateManager() {
  if (!new.target) return new StateManager();

  this.state = {};

  StateManager.prototype.setValue = function setValue(key, value) {
    console.log(`OLD VALUES 📣///${JSON.stringify(this.state)}`);
    this.state[key] = value;
    console.log(`NEW VALUES📣///${JSON.stringify(this.state)}`);
  };
}

//extending Component prototypes into StateManager
Object.assign(StateManager.prototype, Object.create(Component.prototype));

const sM = StateManager();

sM.setValue('company', 'Blocket');
sM.setValue('branch', 'Sweden');
