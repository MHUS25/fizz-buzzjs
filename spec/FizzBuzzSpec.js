describe("Fizzbuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  it("should return Fizz if a number is divisible by 3", function() {
    expect(fizzbuzz.eval(3)).toEqual("Fizz");
  });

  it("should return Fizz if a number is divisible by 5", function() {
    expect(fizzbuzz.eval(5)).toEqual("Buzz");
  });

  it("should return Fizz if a number is divisible by 3 and 5", function() {
    expect(fizzbuzz.eval(15)).toEqual("FizzBuzz");
  });

  it("should return number if a number is not divisible by 3 or 5", function() {
    expect(fizzbuzz.eval(2)).toEqual(2);
  });



});
