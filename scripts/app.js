angular.module('TaskList', [])

.controller('TasksCtrl', function ($scope, $http) {
    $scope.tasklist = [];
    
     function refresh() {
        $http.get('http://52.24.38.84:8080/Tasks').success(function (data, status, headers, config) {
            $scope.tasklist = data;
        });
    }
    
    $scope.addTask = function(newTask) {
        $http.post('http://52.24.38.84:8080/Tasks', {des: newTask}).success(function () {
            refresh();
        })
         $scope.taskName = "";
    };
    }

     $scope.deleteTask = function (task) {
        $http.delete('http://52.24.38.84:8080/Tasks/' + task.id).success(function () {
            refresh();
        });
    };
});
