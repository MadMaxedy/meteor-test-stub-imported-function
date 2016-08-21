# meteor-test-stub-imported-function

Aims at demonstrating the problem when trying to test `module_to_test.js`. 
This module imports `foo` from `exported_function.js`.
In `module_to_test.test.js` `foo` is being stubbed with `sinon`, 
but unfortunately when calling `foo` from `module_to_test.js` it still returns the original value instead
of the value declared in the stub.

## How to run 

1. install Meteor
1. run `npm install`
1. run `meteor test --driver-package practicalmeteor:mocha`
