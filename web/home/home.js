let users = [];

window.onload = () => {
    const admin = { username: 'admin', password: 'admin', firstName: 'admin', lastName: 'user', loggedOn: false };
    users.push(admin);
    localStorage.setItem('users', JSON.stringify(users));
    users = JSON.parse(localStorage.getItem("users"));
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
