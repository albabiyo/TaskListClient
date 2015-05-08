angular.module('TaskList', [])

.controller('TasksCtrl', function ($scope, $http) {
    $scope.tasklist = [];
    
     function refresh() {
        $http.get('/Tasks').success(function (data, status, headers, config) {
            $scope.tasklist = data;
        });
    }
    
    $scope.addTask = function(newTask) {
        $http.post('/Tasks', {des: newTask}).success(function () {
            refresh();
        })
         $scope.taskName = "";
    };
    }

     $scope.deleteTask = function (task) {
        $http.delete('/Tasks/' + task.id).success(function () {
            refresh();
        });
    };
});
