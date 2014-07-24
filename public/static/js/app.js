'use strict';

var scratchApp = angular.module('scratchApp', ['ui.router']);

scratchApp.run(['$rootScope', '$state', '$stateParams',
      function ($rootScope, $state, $stateParams) {
  	     $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }]);

scratchApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
       
         .state('home', {
            url: '/home',
            templateUrl: '/static/partials/partial-home.html'
        })

        .state('about', {
            url: '/about',
            templateUrl: '/static/partials/partial-about.html'
        })

         // need to add tests
        // .state('test', {
        // 	url:'/test',
        // 	templateUrl: '/static/test/jasmine/SpecRunner.html'
        // })
           
});

// scratchApp.factory('UserFactory', function ($resource){
// 	return $resource('Users/users.json')
// });

// scratchApp.controller('testCntr', function ($scope, UserFactory){
// 	$scope.text = 'Hello World';
// 	$scope.users = UserFactory.get();
// });

scratchApp.controller('mainController', function ($scope, $http){
	$scope.formData = {};

	$http.get('/api/pubs')
		.success(function(data){
			$scope.pubs = data;
			console.log('data: ',data);
		})
		.error(function(data){
			console.log('Error' + data);
		});	

	$scope.createPub = function(){

		$http.post('api/pubs', $scope.formData)
			.success(function(data){
				$scope.formData = {};
				$scope.pubs = data;
				console.log('data', data);
			})
			.error(function(err){
				console.log('Error' + data);
			});			
	};	

	$scope.deletePub = function(id){
		$http.delete('/api/pubs/' + id)
			.success(function(data){
				$scope.pubs = data;
				console.log('/api/pubs/', id);
			})
			.error(function(err){
				console.log('Error' + data);
			});	
	};

});



