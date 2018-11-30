import Web3 from 'web3';
import Infura_API from 'infura';

// window is only available in the browser ... with Joia and server
// side rendering in NEXT this is not doabel ... the belwo line of code is only
// working if the browser is already there e.g with create-react-app and Metamask
// installed: const web3 = new Web3(window.web3.currentProvider);

// in a real world project we have to take care of that .... the below if
// statement solves it
let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	// we are in the browser and Metamask is running
	web3 = new Web3(window.web3.currentProvider);
	console.log('Web3 initiaction using Metamask: '+window.web3.currentProvider);
} else {
	// we are on the server *OR* the user is not running Metamask
	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/v3/'+Infura_API
	);
	web3 = new Web3(provider);
	console.log('Web3 initiaction using Infura: '+ provider);

	getCurrentAccount();
}

async function getCurrentAccount() {
	const currentAccount = await web3.eth.getAccounts();
	console.log('getCurrentAccount has resolved, returning a value of: ' + currentAccount[0]);
	return currentAccount[0];
}

export default web3;
