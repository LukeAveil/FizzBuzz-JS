describe("FizzBuzz", function() {
  var game;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

    describe("Multiple of 3 and 5", function() {
      it("should be equal to 'fizzbuzz'", function() {
        expect(game.play(15)).toEqual('fizzbuzz');
    });

  });
});
