var exercise = angular.module('exercise', []);

exercise.controller('ExerciseController', function ($scope, $http) {
	//var url = "http://workbenchadmin.strakertranslations.com/dummy/data.json";
    var url = "data.json";
    
	$http.get(url).then(function(response) {
        $scope.lists = response.data;
    });
    
    $scope.updateDisplay = function (title) {
    	for (i in $scope.lists) {
    		if ($scope.lists[i].title == title) {
    			$scope.display = $scope.lists[i];
    		}
    	}
    }
});