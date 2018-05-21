const expect = chai.expect;

describe('index.js', function () {
  const drivers = [
    { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
    { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
    { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
    { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
    { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
  ];

  const driversCopy = [...drivers];

  afterEach(function () {
    expect(drivers, 'MAKE SURE YOUR ARRAY MANIPULATIONS ARE NON-DESTRUCTIVE').to.eql(driversCopy);
  });

  describe('logDriverNames()', function () {
    let spy;

    beforeEach(function () {
      spy = sinon.spy(console, 'log');
    });

    afterEach(function () {
      spy.restore();
    });

    it('logs the name of each driver', function () {
      logDriverNames(drivers);

      expect(spy.calledWithExactly('Bobby')).to.be.true;

      expect(spy.calledWithExactly('Sally')).to.be.true;

      expect(spy.calledWithExactly('Sammy')).to.be.true;

      expect(spy.calledWithExactly('Annette')).to.be.true;

      expect(spy.calledWithExactly('Bobby')).to.be.true;
    });
  });

  describe('logDriversByHometown()', function () {
    let spy;

    beforeEach(function () {
      spy = sinon.spy(console, 'log');
    });

    afterEach(function () {
      spy.restore();
    });

    it('logs the name of each driver whose hometown matches the passed-in argument', function () {
      logDriversByHometown(drivers, 'Pittsburgh');

      expect(spy.calledWithExactly('Bobby')).to.be.true;

      expect(spy.calledWithExactly('Sammy')).to.be.true;

      expect(spy.calledWithExactly('Annette')).to.not.be.true;
    });
  });
  




});
