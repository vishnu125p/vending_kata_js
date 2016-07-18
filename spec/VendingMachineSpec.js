describe("Vending Machine", function() {

	  var vendingMachine;

	  beforeEach(function() {
		vendingMachine = new VendingMachine();
	  });

	  it("Test", function() {
	    
	    expect(true).toEqual(true);
	  });
	  
	  describe("Inserting Coins", function() {
		it("Displays 0.25 when a Quarter is Entered", function() {
		  vendingMachine.insertCoin('large', 'heavy');
		  expect(vendingMachine.display).toEqual("$0.25");
		});

		it("Displays 0.10 when a Dime is Entered", function() {
		  vendingMachine.insertCoin('small', 'light');
		  expect(vendingMachine.display).toEqual("$0.10");
		});

		it("Displays 0.05 when a Nickel is Entered", function() {
		  vendingMachine.insertCoin('medium', 'medium');
		  expect(vendingMachine.display).toEqual("$0.05");
		});

		it("Displays the added value of multiple coins", function() {
		  vendingMachine.insertCoin('medium', 'medium');
		  vendingMachine.insertCoin('large', 'heavy');
		  expect(vendingMachine.display).toEqual("$0.30");
		  vendingMachine.insertCoin('small', 'light');
		  expect(vendingMachine.display).toEqual("$0.40");
		});

		it("Does not accept pennies", function() {
		  vendingMachine.insertCoin('small', 'verylight');
		  expect(vendingMachine.coinReturn).toContain('small', 'verylight');
		  expect(vendingMachine.display).toEqual("INSERT COIN");
		});

	 });
	 
});