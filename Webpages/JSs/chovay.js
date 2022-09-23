let fullName = document.getElementById('fullname')
let birthDay = document.getElementById('birthDay')
let phoneNumber = document.getElementById('phoneNumber')
let assets = document.getElementById('assets')

// gọi ra các thẻ div cảnh báo
let nameError = document.getElementById('error-name')
let birthDayError = document.getElementById('error-birthday')
let phoneError = document.getElementById('error-phonenumber')
let assetsError = document.getElementById ('error-assets')
console.log(assetsError.innerHTML);
let form = document.querySelector('form')
form.addEventListener( "submit",   function validate(e) {
    e.preventDefault()
 success = true
if (fullName.value =="") {
    nameError.innerHTML = 'Tên bạn không được để trống'
    fullName.style.border ='1px solid red'
    success = false    
}
if (birthDay.value =="") {
    birthDayError.innerHTML ='Ngày sinh không được để trống'
    birthDay.style.border = '1px solid red'
    success = false 
}
if (phoneNumber.value == "") {
    phoneError.innerHTML = 'Số điện thoại không được để trống'
    phoneNumber.style.border = '1px solid red'
    success = false
}
if (assets.value == "") {
    assetsError.innerHTML ='Bạn chưa chọn loại tài sản'
    assets.style.border ='1px solid red'
    success = false
}
}
if (success == true) {
    
} )
   