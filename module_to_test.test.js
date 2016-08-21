import {chai} from 'meteor/practicalmeteor:chai';
import FooModule from './exported_function.js';
import { foo, __RewireAPI__ as FooModuleRewireAPI } from './exported_function.js';
import { bar } from './module_to_test.js';

const stubbedResult = 'stubbed result';

describe('module default exported rewire api', function() {
   before(function() {
   	FooModule.__Rewire__('message', function() {
         return stubbedResult;
      });
   });
   after(function() {
		FooModule.__ResetDependency__('message');
   });
   it('should demonstrate the default exported rewire api', function() {
      expect( foo() ).to.equal(stubbedResult);
   });
   it('should also work for bar', function() {
      const result = bar();
      expect(result).to.equal(stubbedResult);
   });
});

describe('module rewire apis named export', function() {
   before(function() {
   	FooModuleRewireAPI.__Rewire__('message', function() {
         return stubbedResult;
      });
   });
   after(function() {
		FooModuleRewireAPI.__ResetDependency__('message');
   });
   it('should demonstrate the rewire apis named export', function() {
      expect( foo() ).to.equal(stubbedResult);
   });
   it('should also work for bar', function() {
      const result = bar();
      expect(result).to.equal(stubbedResult);
   });
});
