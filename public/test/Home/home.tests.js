'use strict';

describe('testCntr', function(){
	var scope; // we'll use this scope in our tests
	
	// mock App to allow us to inject our own dependencies
	beforeEach(angular.mock.module('scratchApp'));
	// mock the controller for the same reason and include $rootScope and $controller
	beforeEach(angular.mock.inject(function($rootScope, $controller){
		// create an empty scope
		scope = $rootScope.$new();
		// declare the controller and inject our empty scope
		$controller('testCntr', {$scope:scope}});
		});
});