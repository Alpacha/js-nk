alert("Hi!")
const suggest = "a) Registrate.\nb) Sign in.\nc) Check users list.\nd) Change personal data.\nq) Exit.";
userChoosingOption(suggest);
alert("Bye bye");

// If user choose "a" this function suggesting one by one options
function registerNewUser(array) {
    let newUser = {};
    newUser.userFirstName = prompt("Name please", "Name");
    newUser.userLastName = prompt("Surname please", "Surname");
    newUser.userAge = prompt("Age please", "Age");
    newUser.userEmail = prompt("Email please", "Email");
    newUser.userPassword = prompt("Passsword please", "Password");
    array.push(newUser);
    console.log(newUser.userFirstName, newUser.userLastName, " added")
};

// if your choose "b" this function suggesting email and password
function signIn(array) {
    signEmail = prompt("Email please", "Email");
    signPass = prompt("Passsword please", "Password");

    function findUser(userObject) {
        if (userObject.userEmail === signEmail && userObject.userPassword === signPass) {
            return true;
        }
        return false;
    }

    let foundUser = array.find(findUser)
    if (foundUser) {
        console.log(foundUser)
    } else {
        console.log("User not found")
    }
    // Finding matches if user already exists using forEach; note: it goes through each element and displays actual amount of not found users, then shows found and if after this array got more object shows NOT FOUND again
    // let user;
    // usersArray.forEach(function (userObject) {
    //     if (userObject.userEmail === signEmail) {
    //         user = userObject;
    //     }
    // });
    // if (user) {
    //     console.log(user);
    // } else {
    //     console.log("Such user doesnt exist")
    // }
}

// if your choose "c" this function checks such user and if TRUE displays its own keys and value, if none says Empty list
function checkUserList(array) {
    if (array.length === 0) {
        console.log("Empty list");
        return;
    }

    array.forEach(function (userObj) {

        for (key in userObj) {
            console.log("KEY = ", key, "VALUE = ", userObj[key])
        }
        console.log("--------------------------------------")
    })
}

//Main part of programm, conditions of chooses.
function userChoosingOption(message) {
    let usersArray = [];

    while (true) {
        let options = prompt(message, "Select option");
        if (options === "a" || options === "A") {
            registerNewUser(usersArray);

        } else if (options === "b" || options === "B") {
            signIn(usersArray);
        } else if (options === "c" || options === "C") {
            checkUserList(usersArray);
        } else if (options === "d" || options === "D") {

        } else if (options === "q" || options === "Q") {
            break;
        } else {
            alert("Bullshit. Go again");
            continue;
        }

        if (confirm("Go again?")) {
            continue;
        } else {
            break;
        }
    }
};