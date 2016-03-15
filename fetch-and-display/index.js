function FetchDataController($scope, $http)
{
    var url = 'data.json';

    $http.get(url).then(function(response) {
        $scope.lists = response.data;
    });

    $scope.updateDisplay = function(index) {
        $scope.display = $scope.lists[index];
    }
}