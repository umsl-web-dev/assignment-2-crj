let users = [];

window.onload = () => {
    const admin = { username: 'admin', password: 'admin', firstName: 'admin', lastName: 'user', loggedOn: false };
    users.push(admin);
    localStorage.setItem('users', JSON.stringify(users));
    users = JSON.parse(localStorage.getItem("users"));
}