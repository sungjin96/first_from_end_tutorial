var database = [
  {
    username: "admin",
    password: "1",
  },
];

var newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning!",
  },
  {
    username: "Sally",
    timeline: "Javascript is sooooo coooool!",
  },
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's tour password?");

function singIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username and password!");
  }
}

singIn(userNamePrompt, passwordPrompt);
