let database = [
  {
    username: "admin",
    password: "1",
  },
  {
    username: "admin1",
    password: "1",
  },
  {
    username: "admin2",
    password: "1",
  },
];

let newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning!",
  },
  {
    username: "Sally",
    timeline: "Javascript is sooooo coooool!",
  },
];

const userNamePrompt = prompt("What's your username?");
const passwordPrompt = prompt("What's tour password?");

function isUserValid(username, password) {
  const result = database.filter(
    (user) => user.username === username && user.password === password
  );
  console.log({ result });
  return result.length > 0 ? true : false;
}

function singIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username and password");
  }
}

singIn(userNamePrompt, passwordPrompt);
