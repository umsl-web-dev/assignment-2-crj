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