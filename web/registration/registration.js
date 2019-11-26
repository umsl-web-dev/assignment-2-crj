let users = [];

createUser = () => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let createFlag = true;

    users.forEach(user => {
        if (user.username === username) {
            alert('Please choose a different username');
            createFlag = false;
        }
    });

    if (createFlag === true) {
        let newUser = {
            "username": username,
            "password": password,
            "firstName": firstName,
            "lastName": lastName
        }

        saveToLocalStorage(newUser);
    }
}

saveToLocalStorage = (user) => {
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

window.onload = () => {
    const admin = { username: 'admin', password: 'admin', firstName: 'admin', lastName: 'user' };
    users.push(admin);
    localStorage.setItem('users', JSON.stringify(users));
    users = JSON.parse(localStorage.getItem("users"));
}