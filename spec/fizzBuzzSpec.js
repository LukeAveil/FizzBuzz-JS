describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe("Multiple of 3 and 5", function() {
    it("should be equal to 'fizzbuzz'", function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });
  });


  describe("Multple of 3", function() {
    it("should be equal to 'fizz'", function() {
      expect(fizzBuzz.play(9)).toEqual('Fizz');
    });
  });

  describe("Multiple of 5", function() {
    it("should be equal to 'buzz'", function() {
      expect(fizzBuzz.play(20)).toEqual('Buzz');
    });
  });

  describe("Other numbers", function() {
    it("should display the number", function() {
      expect(fizzBuzz.play(7)).toEqual(7);
    });
  });
});
