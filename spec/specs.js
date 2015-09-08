describe('triangleTracker', function() {
  it("is an equilateral triangle. all sides are equal", function() {
    expect(leapYear(3, 3, 3)).to.equal("equilateral");
  });

  it("is an isoceles triangle. two of its sides are equal", function() {
    expect(leapYear(3, 3, 5)).to.equal("isoceles");
  });

  it("is an isoceles triangle. two of its sides are equal", function() {
    expect(leapYear(5, 3, 5)).to.equal("isoceles");
  });

  it("is a scalene triangle. none of its sides are equal", function() {
    expect(leapYear(2, 3, 4)).to.equal("scalene");
  });
});
