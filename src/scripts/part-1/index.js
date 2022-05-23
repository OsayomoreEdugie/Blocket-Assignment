/*!**********************************************************!*
  Part 2:
    Below contains a JavaScript implementation of a basic 
    Component class, with an instantiation of it. Unfortunately,
    it doesn't work; list any errors or problems that are
    preventing it from successfully running.
 *!***********************************************************!*/

var Component = function (config) {
  for (property in config) {
    this[property] = config[property];
  }
};

var list = Array('Item 1', 'Item 2', 'Item 3');

var instance = Component('XF-254', list);

/*******************************************************************************
 * LIST ANY ERRORS OR PROBLEMS THAT ARE PREVENTING IT FROM SUCCESSFULLY RUNNING.
 *
 * 1. Component constructor expects "just one argument of any data structure but Object
 *    or Array preferably" but "it receives 2 arguments in line 17" with the first argument being a string
 *    data structure. But this doesn't prevent it from running since its in loose-env and not "strict-env", just mentioning
 *
 * 2. Component constructor is instantiated without the new keyword(and this is what is preventing it from running), meaning:
 *    i. new object (__proto__) is prevented from being created by the Function constructor and binded to the Component constructor
 *    ii. because "i. above" didn't take place, a linkage of the supposed "new object in i."  to Component.prototype is prevented
 *    iii. also, because new object is not created, there is no binding of the new object(__proto__) to the "this context".
 *    Behind the hood, when we instantiate a constructor with the new keyword, this should happen:
 *             const __proto__={//Hey, do you know i am the new object of which can only be accessible by my Constructor instance e.g new Func().__proto__
 *                  ...Component.prototype
 *              }
 *             this={
 *                ...__proto__
 *
 *               }
 *
 * Solution: is to instantiate "Component" with "new" keyword
 *
 *******************************************************************************/
