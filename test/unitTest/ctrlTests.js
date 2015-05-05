
describe('TaskList Ctrlr', function () {
	beforeEach(module('TaskList'));
	
	var scope;
	var controller;

	beforeEach(inject(function($controller, $scope){
	    controller = $controller;
	    scope=$scope;

	  }));

    it('Start with no tasks', function () {
        expect(scope.tasklist).toBeDefined();
        expect(scope.tasklist.length).toBe(0);
    });

    it('Add new task', function () {
        scope.addTask('TestTask');
        expect(scope.tasklist[0]).toEqual('TestTask');
        expect(scope.tasklist.length).toBe(1);
    });

    it('Delete new task', function () {
        scope.addTask('TestTask');
        scope.deleteTask(0);
        expect(scope.tasklist.length).toBe(0);
    });

});