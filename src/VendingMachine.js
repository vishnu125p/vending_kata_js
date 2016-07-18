function VendingMachine() {

var Coins = {
	size: [ 'small', 'medium', 'large' ],
	weight: [ 'light','verylight','medium','heavy' ]
};
	
var Product = {
  SODA : {name : "Soda", cost : 1.00},
  CHIPS : {name : "Chips", cost : 0.50},
  CANDY : {name : "Candy", cost : 0.65}
};

function coinValue(size, weight) {
	var value = 0;
	
	if (size == Coins.size[0] && weight == Coins.weight[0]) {
		value = 0.10;
	} 
	// pennny
	else if (size == Coins.size[0] && weight == Coins.weight[1]) {
		value = 'undefined';
	}
	else if (size == Coins.size[1] && weight == Coins.weight[2]) {
		value = 0.05;
	}
	else if (size == Coins.size[2] && weight == Coins.weight[3]) {
		value = 0.25;
	}
	else {
		value = 'undefined';
	}
	return value;
};

  this.display = 'INSERT COIN';
  this.coinReturn = [];
  this.coinsAdded = [];
  this.amountInserted = 0;
  this.displayTotal = 0;
  
  this.products = [Product.CHIPS, Product.SODA, Product.CANDY];
  this.itemBin = [];

  this.updateDisplay = function() {
    this.updateTotal();

    if (this.displayTotal > 0) {
	  this.display = '$' + this.displayTotal.toFixed(2);
	  //console.log('Amount Inserted: ' + this.display);
	} else {
      this.display = 'INSERT COIN';
    }
    
  };

  this.updateTotal = function() {
    this.displayTotal += this.amountInserted;
    this.amountInserted = 0;
	console.log('Updated Total: ' + this.displayTotal);
  };
  
  this.clearTotal = function() {
    this.displayTotal = 0;
    this.coinsAdded = [];
  };

  this.insertCoin = function(size, weight) {
    
	value = coinValue(size, weight);
	//console.log('Inserted coin and value is: ' + value);
	
	if(value == 'undefined')
	{
		this.coinReturn.push(size, weight);
	}
	else
	{
		this.coinsAdded.push(size, weight);
		this.amountInserted = value;
	}
	this.updateDisplay();
	
  };

  this.returnCoins = function() {
    this.coinReturn = this.coinsAdded;
    this.coinsAdded = [];
    this.updateDisplay();
  };

}