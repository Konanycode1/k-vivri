document.addEventListener('DOMContentLoaded', ()=>{
    let data = localStorage.getItem("SessionUser");
    let verifSuper = localStorage.getItem("superAdmin");
    let verifAdmin =  localStorage.getItem("admin");
    let para = document.querySelector('.user');
    verifAdmin = JSON.parse(verifAdmin);
    verifSuper = JSON.parse(verifSuper);
    data = JSON.parse(data);
    let logStatus = false;
    // data = data.find(element => element.admin);

    if( data.user == verifSuper.admin || data.user == verifAdmin.admin ){
        logStatus = true;
        para.style.color = "white"
        para.style.marginLeft = "5px"
        para.textContent = data.user;
    }
    else{
        logStatus;
    }  
})