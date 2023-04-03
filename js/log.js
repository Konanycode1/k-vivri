document.addEventListener('DOMContentLoaded', ()=>{
    let form = document.querySelector('form');
    let btnLog = document.querySelector('.btnLog');
    let utili = document.getElementById('admin');
    let pwd = document.getElementById('pwd');
    let login = document.querySelector('.login');
    let userUdefine ={
        admin : "superadmin",
        pwd : "superadmin"
    }
    localStorage.setItem("superAdmin", JSON.stringify(userUdefine));

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
    })
    
    btnLog.addEventListener('click', ()=>{
        let recupSuper = localStorage.getItem("superAdmin");
        let recupAdmin = localStorage.getItem('admin');
        let para = document.createElement("p")
        // let data = {
        //     superAdmin : utili.value,
        //     pwd : pwd.value
        // }
        
        recupSuper = JSON.parse(recupSuper);
        recupAdmin = JSON.parse(recupAdmin);
        console.log(recupAdmin)
        if(recupAdmin != null || recupSuper != null){
            if (utili.value === recupSuper.admin) {
                if(pwd.value === recupSuper.pwd){
                    let user = {
                        user: utili.value,
                        statut : "superadmin",
                        pwd : pwd.value
                    }
                    user = JSON.stringify(user)
                    localStorage.setItem('SessionUser',user)
                    window.location.href = "../pages/dashboard.html"
                }
                else{
                    para.style.color = "green";
                    para.textContent = "Veuillez vériefier votre mot de passe par défaut"
                    login.appendChild(para);
                }
            }
            else if ( recupAdmin.some(item => item.user == utili.value && item.psw == pwd.value) ) {
                        let user = {
                            user: utili.value,
                            statut : "admin",
                            pwd : pwd.value
                        }
                        user = JSON.stringify(user)
                        localStorage.setItem("SessionUser", user )
                        // let verif = localStorage.getItem('SessionUser')
                        // let tabUser = []; 
                        // if(verif == null){
                        //     tabUser.push(user);
                        //     localStorage.setItem("SessionUser", JSON.stringify(tabUser))
                        // }
                        // else{
                        //     verif = verif.push(user)
                        //     localStorage.setItem("SessionUser", JSON.stringify(verif))
                        // }
                        window.location.href = "../pages/dashboard.html";
            }
            else{
                    para.style.color = "green";
                    para.textContent = "Veuillez vériefier vos d'utilisateur !!"
                    login.appendChild(para);
            }

        } 
        else{
            para.style.color = "green";
            para.textContent = "Veuillez vériefier vos identifiant !!"
            login.appendChild(para);
        }

        
    })
})