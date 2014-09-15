'use strict';
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require("sinon-chai");

var rewire = require('rewire');
var moment = require('moment-timezone');

var expect = chai.expect;
var fakes;
var date;

chai.use(sinonChai);

describe('date', function() {

  beforeEach(function() {

    date = rewire(process.cwd() + '/date');
    fakes = sinon.sandbox.create();

  });

  afterEach(function() {

    fakes.restore();

  });

  describe('YYYY-MM-DD', function () {

    it('should throw an error if the supplied date is not in the correct format', function() {

      expect(function () {

        date(/\d{4}-\d{2}-\d{2}/, 'YYYY-MM-DD', 'Europe/London', '1974-12');

      }).to.throw(TypeError);

    });

    it('should throw an error if the supplied date is not valid date', function() {

      expect(function () {

        date(/\d{4}-\d{2}-\d{2}/, 'YYYY-MM-DD', 'Europe/London', '1974-12-34')

      }).to.throw(RangeError);

    });

    it('should return the supplied date as a moment object if it passes the validation check', function() {

      var d = '1974-12-01';
      var m = date(/\d{4}-\d{2}-\d{2}/, 'YYYY-MM-DD', 'Europe/London', d);
      var t = moment.tz(d, 'YYYY-MM-DD', 'Europe/London');
      t.isValid();
      expect(m).to.be.deep.equal(t);

    });



  })


});
