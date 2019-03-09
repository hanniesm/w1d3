var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

function printFollowing(id) {
  arr = data[id]["follows"];
  var following = [];
  for (var i in arr) {
    var followid = arr[i];
    following.push(data[followid].name)
  }

  return following;
}

// console.log(printFollowing("f04"));

function printFollowers(id) {
  var followers = [];
  for (var i in data) {
    var arr = data[i].follows;
    var name = data[i].name;

    for (var i in arr) {
      if (arr[i] === id) {
        followers.push(name);
      }
    }
  }
  return followers
}

// console.log(printFollowers("f04"));

function numFollowers() {
  for (var i in data) {
    var follows = data[i].follows;
   return follows.length
  }
}

numFollowers();

function mostFollowers() {
  for (var i in data) {
    var follows = data[i].follows;
    var numFollowers = follows.length
  }
}