window.onload = addName ()
function addName () {
    let myName = localStorage.getItem('userNameChecked')
    userName.innerHTML= myName
}
