var database = [
{
	username: "andrei",
	password: "supersecret"
},
{
	username: "sally",
	password: "123"
},
{
	username: "ingrid",
	password: "777"
}
];

var newsFeed = [
{
	username: "Bobby",
	timeline: "So tired from all that learning"
},
{
	username: "Sally",
	timeline: "Javascript is so cool!"
}
];

function isUserValid(user, pass) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === user && database[i].password === pass) {
			return true;
		}
	}
	return false;
}

function signIn(user, pass) {
	if (isUserValid(user, pass)) {
	console.log(newsFeed);
	} else {
	 	alert("Invalid credentials!");
	}
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);
