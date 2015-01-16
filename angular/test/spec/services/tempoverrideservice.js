'use strict';

describe('Service: tempOverrideService', function () {

  // load the service's module
  beforeEach(module('hotPieApp'));

  // instantiate service
  var tempOverrideService;
  beforeEach(inject(function (_tempOverrideService_) {
    tempOverrideService = _tempOverrideService_;
  }));

  it('should do something', function () {
    expect(!!tempOverrideService).toBe(true);
  });

});
