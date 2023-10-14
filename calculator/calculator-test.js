
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 200000, years: 30, rate: 7.2})).toEqual('1357.58');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 70500, years: 2, rate: 6.48})).toEqual('3139.87');
});

it("should work with a 1-year term", function(){
  expect(calculateMonthlyPayment({amount: 6350, years: 1, rate: 2.2})).toEqual('535.49');
})
