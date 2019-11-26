let users = [];

test = () => {
    console.log(users);
    let newUser = {
        "username": document.getElementById('username').value,
        "password": document.getElementById('password').value,
        "firstName": document.getElementById('firstname').value,
        "lastName": document.getElementById('lastname').value
    }

    saveToLocalStorage(newUser);
}

saveToLocalStorage = (user) => {
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    console.log(users);
}

window.onload = () => {
    const admin = { username: 'admin', password: 'admin', firstName: 'admin', lastName: 'user' };
    users.push(admin);
    localStorage.setItem('users', JSON.stringify(users));
    users = JSON.parse(localStorage.getItem("users"));
}