let users = [];

window.onload = () => {
    users = JSON.parse(localStorage.getItem("users"));

    if (users === null) {
    users = [];
    const admin = { username: 'admin', password: 'admin', firstName: 'admin', lastName: 'user', loggedOn: false };
    users.push(admin);
    localStorage.setItem('users', JSON.stringify(users));
    }

    isLoggedOn();
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
    } else {
        window.open('../login/login.html', '_self');
    }

}

isLoggedOn = () => {
    users.forEach(user => {
        if (user.loggedOn === true) {
            document.getElementById('signUpId').style.display = "none";
            document.getElementById('signInId').style.display = "none";
        }
    });
}

const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab Content Item
function selectItem(e){
    
    removeBorder();
    removeShow();

    //Add border to current tab
    this.classList.add('tab-border');

     //Get the content items from DOM
     const tabContentItem = document.querySelector(`#${this.id}-content`);

     //Adding show class 
     tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//Listen for Tab Click
tabItems.forEach(item=> item.addEventListener('click', selectItem));
