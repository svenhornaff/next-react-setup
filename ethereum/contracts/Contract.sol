pragma solidity ^0.4.25;

contract TestContract {
	string public message;

	// some function
	constructor() public {
		message = "I am a contract!";
	}

	function setMsg(string _message) public {
		message = _message;
	}

	function getMsg() public view returns (string) {
		return message;
	}
}
