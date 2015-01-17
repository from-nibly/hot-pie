'use strict';

describe('Service: thermostatService', function () {

  // load the service's module
  beforeEach(module('hotPieApp'));

  // instantiate service
  var thermostatService;
  beforeEach(inject(function (_thermostatService_) {
    thermostatService = _thermostatService_;
  }));

  it('should do something', function () {
    expect(!!thermostatService).toBe(true);
  });

});
