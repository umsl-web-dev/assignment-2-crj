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
        window.open('../home/home.html', '_self');
    }
}

login = () => {
    let successful = false;
    let username = document.getElementById('username').value.toLowerCase();
    let password = document.getElementById('password').value;

    users.forEach(user => {
        if (user.password === password && user.username === username) {
            user.loggedOn = true;
            localStorage.setItem('users', JSON.stringify(users));

            successful = true;
            window.open('../store/store.html', '_self');
        }
    });

    if (successful === false) {
        alert('username or password was incorrect! Please try again');
    }
}