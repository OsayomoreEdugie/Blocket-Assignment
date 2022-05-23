module.exports = function Component() {
  if (!new.target) return new Component();

  if (typeof Component.instance === 'object') return Component.instance;

  //Lets singlify this constructor to optimize unnecessary re-instantiation since the publisher needs no variants(instances)
  (function singlifyComponent() {
    Component.instance = this;
  })();

  //we don't want observers to be an attribute of the sub-constructor so we are privatizing it as a private expression
  const observers = [];

  Component.prototype.subscribe = function subscribe(observer) {
    const isSubscribed = observers.includes(observer);

    if (isSubscribed) {
      return console.warn('SubscriptionError🚨: Observer has been attached already.');
    }

    console.log('SubscriptionSuccess✅: Attached an observer.');

    observers.push(observer);
  };

  Component.prototype.unsubscribe = function unsubscribe(observer) {
    const observerIndex = observers.indexOf(observer);

    if (observerIndex === -1) {
      return console.error('UnsubscriptionError🚨: Nonexistent observer.');
    }

    observers.splice(observerIndex, 1);

    console.log('SubscriptionSuccess✅: Detached an observer.');
  };

  function notify(methodKey, data) {
    for (const observer in observers) {
      if (observers[observer][methodKey]) {

        if (data) observers[observer][methodKey](data);

        else observers[observer][methodKey]();
      }
    }
  }


  Component.prototype.sigUpStudent = function signUpStudent(data) {
    notify('signUpStudent', data);
  };

  Component.prototype.logout = function logout() {
    notify('logout');
  };
}


