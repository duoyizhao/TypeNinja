// import {expect} from 'chai';
// import sinon from 'sinon';
// import getLesson from '../getLesson';

// # Mocha Guide to Testing
// 1. `describe()` is merely for grouping, which you can nest as deep
// 2. `it()` is a test case
// 3. `before()`, `beforeEach()`, `after()`, `afterEach()` are hooks to run
// before/after first/each it() or describe().
// Which means, `before()` is run before first it()/describe()

var assert = require('chai').assert;
var app = require('../app');

describe('app', function() {
	it('addElement should turn each character in lesson into an html element', function() {
		assert.equal(addElement(3), document.getElementById('3'));
	});
	//it('should add an html element to the lesson div', )
});