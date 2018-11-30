const assert = require('assert');

let api;

beforeEach(async () => {

	api = await require('etherscan-api')
		.init('TR9HXEUZ5RXA8WV1FYNZ6WAK8S7RQ65TI7','rinkeby', '3000');
});

describe ('Test etherscan-api interface', ()=> {
	it('etherscan-api initiated successful', () => {
		assert.ok(api);
	});

	it('Account balance - returns a promise', function( ){
		var balance = api.account.balance('0x553fd0c6f4cf454D46BABb291461B963a5c91424');
		assert.ok(balance.then);
	});

	it('Account balance - executes the promise', function(done){
		var balance = api.account.balance('0x553fd0c6f4cf454D46BABb291461B963a5c91424');
		balance.then(function(){
			done();
		});
	});

	it('Account balance - has data', function(done) {
		var balance = api.account.balance('0x553fd0c6f4cf454D46BABb291461B963a5c91424');
		balance.then(function(res){
			assert.ok(res);
			done();
			console.log(res);
		});
	});

	// return the entire tranaction log of a contract on Rinkeby
	it('tx lsit of a contacrt', function(done) {
		var supply = api.account.txlist('0xdED303fD9825410aDBdc5Caa273ec69c1d807345');
		supply.then(function(res){
			assert.ok(res);
			//console.log(res);
			done();
		});
	});

	it('proxy.eth_getTransactionCount', function(done){
		var res = api.proxy.eth_getTransactionCount('0xdED303fD9825410aDBdc5Caa273ec69c1d807345');
		res.then(function(res){
			assert.ok(res);
			done();
			console.log(res);
		});
	});

	it('proxy.eth_getTransactionReceipt', function(done){
		var res = api.proxy.eth_getTransactionReceipt('0x222079ceaaafdf34f9ec391fa5d1619bbd8ba03eea7f2970446884d210e2552d');
		res.then(function(res){
			assert.ok(res);
			done();
			console.log(res);
		});
	});
});
