document.addEventListener('DOMContentLoaded', ()=>{
    let data = localStorage.getItem("SessionUser");
    let verifSuper = localStorage.getItem("superAdmin");
    let verifAdmin =  localStorage.getItem("admin");
    verifAdmin = JSON.parse(verifAdmin);
    verifSuper = JSON.parse(verifSuper);
    data = JSON.parse(data);
    // data = data.find(element => element.admin);

    // if( data.user == verifSuper.admin || data.user == verifSuper.admin )



    


    
})