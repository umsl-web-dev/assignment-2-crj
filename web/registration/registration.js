let users = [];

window.onload = () => {
    users = JSON.parse(localStorage.getItem("users"));

    redirectTo();
}

redirectTo = () => {
    let loggedOn = false;
    users.forEach(user => {
        if (user.loggedOn === true) {
            loggedOn = true;
        }
    });

    if (loggedOn === true) {
        window.open('../store/store.html', '_self');
    }
}

createUser = () => {
    let username = document.getElementById('username').value.toLowerCase();
    let password = document.getElementById('password').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let createNewUser = true;

    if (username === '' || password === '' || name === '' || email === '' || phone === '') {
        alert('Please fill out every field');
        createNewUser = false;
    }
    else {

        users.forEach(user => {
            if (user.username === username) {
                alert('Please choose a different username. "' + username + '" is already in use.');
                createNewUser = false;
            }
        });

    }

    if (createNewUser === true) {
        let newUser = {
            "username": username,
            "password": password,
            "fullName": name,
            "email": email,
            "phone": phone,
            "loggedOn": true
        }

        saveToLocalStorage(newUser);

        window.open('../store/store.html', '_self');
    }
}

saveToLocalStorage = (newUser) => {
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
}
