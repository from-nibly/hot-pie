'use strict';

describe('Controller: TermostatCtrl', function () {

  // load the controller's module
  beforeEach(module('hotPieApp'));

  var TermostatCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TermostatCtrl = $controller('TermostatCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
