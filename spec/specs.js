describe('triangleTracker', function() {
  it("is an equilateral triangle. all sides are equal", function() {
    expect(triangleTracker(3, 3, 3)).to.equal("n equilateral");
  });

  it("is an isoceles triangle. two of its sides are equal", function() {
    expect(triangleTracker(3, 3, 5)).to.equal("n isoceles");
  });

  it("is an isoceles triangle. two of its sides are equal", function() {
    expect(triangleTracker(5, 3, 5)).to.equal("n isoceles");
  });

  it("is a scalene triangle. none of its sides are equal", function() {
    expect(triangleTracker(2, 3, 4)).to.equal(" scalene");
  });

  it("is not a triangle if one side is the same or larger than the sum of the other two", function() {
    expect(triangleTracker(2, 2, 8)).to.equal("n impossible");
  });
});
