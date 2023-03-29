document.addEventListener('DOMContentLoaded', ()=>{

    function Create() {
        let form = document.querySelector(".formAdmin");
        let btnCreat = document.querySelector(".btnCreat");
        let nomAdmin = document.getElementById("nomAdmin");
        let userAdmin = document.getElementById("userAdmin");
        let numero = document.getElementById("numero");
        let emailAdmin = document.getElementById("emailAdmin");
        let fonctionAdmin = document.getElementById("fonctionAdmin");
        form.addEventListener("submit",(e)=>{
        e.preventDefault()
        });
        btnCreat.addEventListener("click", ()=>{
            let admin = localStorage.getItem("admin");
            admin = JSON.parse(admin);
            let data = {
                nomPrenom: nomAdmin.value,
                user: userAdmin.value,
                numero: numero.value,
                email: emailAdmin.value,
                fonction: fonctionAdmin.value,
                statut: "admin"
            }
            if(admin == null){
                admin = [];
                admin.push(data)
                localStorage.setItem("admin",JSON.stringify(admin))
                window.location.reload();
            }
            else{
                admin.push(data)
                localStorage.setItem("admin",JSON.stringify(admin));
                window.location.reload();
            }
        })
    }
    Create();
    function add() {
        let recup = localStorage.getItem("admin");
        let divAjout = document.querySelector(".adminListelem");
        recup = JSON.parse(recup)
        recup.forEach(element => {
           let div = document.createElement("div");
           div.className = "adminList-perso"
            let contenu = `
            <img src="../assets/image/ad2.png" alt="">
            <h2>${element.nomPrenom}</h2>
            <h3>${element.fonction}</h3>
            <h3>${element.statut}</h3>
            <h3>
            <svg viewBox="0 0 24 24" width="20px" height="20px" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#19cc4f"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.15" d="M8 16H12L18 10L14 6L8 12V16Z" fill="#5be18a"></path> <path d="M14 6L8 12V16H12L18 10M14 6L17 3L21 7L18 10M14 6L18 10M10 4L4 4L4 20L20 20V14" stroke="#5be18a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </h3>
            <h3>
            <svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24" id="delete-alt-2" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"><path id="secondary" d="M16,8a1,1,0,0,1-1-1V4H9V7A1,1,0,0,1,7,7V4A2,2,0,0,1,9,2h6a2,2,0,0,1,2,2V7A1,1,0,0,1,16,8Z" style="fill: green;"></path>
            <path id="primary" d="M20,6H4A1,1,0,0,0,4,8H5.07l.87,12.14a2,2,0,0,0,2,1.86h8.14a2,2,0,0,0,2-1.86h0L18.93,8H20a1,1,0,0,0,0-2Z" style="fill: #000000;"></path>
            <path id="secondary-2" data-name="secondary" d="M12,18a1,1,0,0,1-1-1V11a1,1,0,0,1,2,0v6A1,1,0,0,1,12,18Z" style="fill: green;"></path>
            </g>
            </svg></h3>
           
            `;
            div.innerHTML = contenu;
            divAjout.appendChild(div);
        });

    }
    add();

   

})