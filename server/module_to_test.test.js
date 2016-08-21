/**********************************************************
 * BizzStream - .js
 * Copyright (c) 2015-2016 Maxedy BV. All rights reserved.
 * Written By: bramnieuwenhuize
 **********************************************************/
import {chai} from 'meteor/practicalmeteor:chai'
import sinon from 'sinon'

import * as exportedFunction from './exported_function.js'
import { bar } from './module_to_test.js'

const stubbedResult = 'stubbed result';

describe('test foo', function() {
	before(function() {
		sinon.stub(exportedFunction, 'foo', () => stubbedResult);
	});
	after(function() {
		exportedFunction.foo.restore && exportedFunction.foo.restore();
	});
	it('should stub foo correctly', function() {
		const result = bar();
		expect(result).to.equal(stubbedResult);
	});
});
