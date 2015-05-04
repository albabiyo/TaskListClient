angular.module('TaskList', [])

.controller('TasksCtrl', ['$scope', function($scope) {
    $scope.tasklist = [];
    
    $scope.addTask = function() {
        if($scope.taskName) {
            $scope.tasklist.push({"name": $scope.taskName});   
            $scope.taskName = "";
        }
    }

    $scope.deleteTask = function(index) {
        $scope.tasklist.splice(index, 1);
    }
}])