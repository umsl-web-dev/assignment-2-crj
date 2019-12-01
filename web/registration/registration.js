let users = [];

createUser = () => {
    let username = document.getElementById('username').value.toLowerCase();
    let password = document.getElementById('password').value;
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let createNewUser = true;

    users.forEach(user => {
        if (user.username === username) {
            alert('Please choose a different username. "' + username + '" is already in use.');
            createNewUser = false;
        }
    });

    if (createNewUser === true) {
        let newUser = {
            "username": username,
            "password": password,
            "firstName": firstName,
            "lastName": lastName,
            "loggedOn": true
        }

        saveToLocalStorage(newUser);
    }
}

saveToLocalStorage = (newUser) => {
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
}
