'use strict';

describe('Service: scheduleService', function () {

  // load the service's module
  beforeEach(module('hotPieApp'));

  // instantiate service
  var scheduleService;
  beforeEach(inject(function (_scheduleService_) {
    scheduleService = _scheduleService_;
  }));

  it('should do something', function () {
    expect(!!scheduleService).toBe(true);
  });

});
