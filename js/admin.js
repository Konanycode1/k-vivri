document.addEventListener('DOMContentLoaded', ()=>{
   

    function CreateAdmin() {
        let form = document.querySelector(".formAdmin");
        let btnCreat = document.querySelector(".btnCreat");
        let nomAdmin = document.getElementById("nomAdmin");
        let userAdmin = document.getElementById("userAdmin");
        let numero = document.getElementById("numero");
        let emailAdmin = document.getElementById("emailAdmin");
        let pwdAdmin = document.getElementById("pwd");
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
                psw: pwdAdmin.value,
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
    CreateAdmin();
    function addAdmin() {
        let recup = localStorage.getItem("admin");
        let divAjout = document.querySelector(".adminListelem");
        recup = JSON.parse(recup)
        recup.forEach(element => {
           let div = document.createElement("div");
           div.className = "adminList-perso"
            let contenu = `
            <img src="../assets/image/ad2.png" alt="">
            <h2 class="nomPrenom">${element.user}</h2>
            <h3 class="fonction">${element.fonction}</h3>
            <h3 class="statut">${element.statut}</h3>
            <h3>
            <svg viewBox="0 0 24 24" width="20px" height="20px" class="update btn btn-Updat" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#19cc4f"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.15" d="M8 16H12L18 10L14 6L8 12V16Z" fill="#5be18a"></path> <path d="M14 6L8 12V16H12L18 10M14 6L17 3L21 7L18 10M14 6L18 10M10 4L4 4L4 20L20 20V14" stroke="#5be18a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
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
    addAdmin();

    function Modal() {

        const modal = document.querySelector(".modal");
        const overlay = document.querySelector(".overlay");
        const openModalBtn = document.querySelectorAll(".btn-open");
        const closeModalBtn = document.querySelector(".btn-close");
        // close modal function
        const closeModal = function () {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
        };
        // close the modal when the close button and overlay is clicked
        closeModalBtn.addEventListener("click", closeModal);
        overlay.addEventListener("click", closeModal);

        // close modal when the Esc key is pressed
        document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) {
            closeModal();
        }
        });
        // open modal function
        const openModal = function () {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
        };
        // open modal event
        openModalBtn.forEach(ele => ele.addEventListener("click", openModal));
    }
    Modal();

    function updateProfil() {
        let formAdmin = document.getElementById("formAd");
        let nomPrenom = document.getElementById("nomPrenom");
        let email =  document.getElementById("email");
        let fonction = document.getElementById("fonction");
        let tel = document.getElementById("tel");
        let btnAdmin = document.getElementById("btnSubmi");

        formAdmin.addEventListener("submit", (e)=>{
            e.preventDefault()
        })
        btnAdmin.addEventListener("click", ()=>{
            let recupUser =  localStorage.getItem("userProfil");
            let data = {
                nomPrenom : nomPrenom.value,
                email: email.value,
                fonction : fonction.value,
                tel: tel.value
            }
            recupUser = JSON.parse(recupUser);
            if(recupUser == null){
                recupUser = [];
                recupUser.push(data);
                localStorage.setItem("userProfil", JSON.stringify(recupUser))
                window.location.reload();
            }
            else{
                recupUser = [];
                recupUser.push(data);
                localStorage.setItem("userProfil", JSON.stringify(recupUser))
                window.location.reload();
            }
        })
    }
    updateProfil()

    function addProfil() {
        let recupProf = localStorage.getItem("userProfil");
        recupProf = JSON.parse(recupProf)
        let nom =  document.querySelector(".nom");
        let fonct =  document.querySelector(".fonction")
        let email =  document.querySelector(".eml");
        let tel = document.querySelector(".tele");

        recupProf?.forEach(item => {
            nom.textContent = item.nomPrenom;
            fonct.textContent = item.fonction;
            email.textContent = item.email
            tel.textContent =  `+225 ${item.tel}`

        })
    }
    addProfil();

    function UpdateAdmin() {
        let update = document.querySelectorAll(".update");
        
        update.forEach(item => item.addEventListener("click", ()=>{
            let upForm = document.getElementById("upForm");
            let upbtn = document.querySelector(".upbtn");
            let upnomPrenom = document.getElementById("upnomPrenom");
            let upnomUtili = document.getElementById("upnomUtili");
            let upfonction = document.getElementById("upfonction");
            let upnmber = document.getElementById("upnmber");
            let upemail = document.getElementById("upemail");
            
            let parent = item.closest(".adminList-perso")
            let name = parent.querySelector(".nomPrenom").textContent;
            let recupAdmin = localStorage.getItem("admin");
            recupAdmin = JSON.parse(recupAdmin);
            recupAdmin = recupAdmin.filter(item => item.nomPrenom == name);

            upnomPrenom.value = recupAdmin[0].nomPrenom
            upemail.value = recupAdmin[0].email
            upfonction.value = recupAdmin[0].fonction
            upnmber.value = recupAdmin[0].numero
            upnomUtili.value = recupAdmin[0].user

            upForm.addEventListener("click", (e)=>{
                e.preventDefault();
            })
            let admins = localStorage.getItem("admin");
            admins = JSON.parse(admins)
            upbtn.addEventListener("click",()=>{
                admins = admins.map(item => {
                    let data;
                    if(item.nomPrenom == name){
                         data = {
                            nomPrenom:upnomPrenom.value ,
                            user: upnomUtili.value,
                            numero: upnmber.value,
                            email: upemail.value ,
                            fonction: upfonction.value,
                            statut: "admin"

                        }
                    }
                    else return item
                    return data
                })
                localStorage.setItem("admin", JSON.stringify(admins))
                window.location.reload();
                
            })
        }))  
    }
    UpdateAdmin();
    function DeleteAdmin() {
        let icoDelete = document.querySelectorAll("#delete-alt-2");
        icoDelete.forEach(item => item.addEventListener("click", ()=>{
            let dad = item.closest(".adminList-perso");
            let child = dad.querySelector(".nomPrenom").textContent;
            let adminList = localStorage.getItem("admin")
            adminList = JSON.parse(adminList)
            adminList = adminList.filter(item => item.nomPrenom != child);
            localStorage.setItem("admin", JSON.stringify(adminList));
            window.location.reload();
        }))
    }
    DeleteAdmin();

    function ModalUp() {

        const modal = document.querySelector(".modalUpdate");
        const overlay = document.querySelector(".overlay");
        const openModalBtn = document.querySelectorAll(".btn-Updat");
        const closeModalBtn = document.querySelector(".btn-closes");
        const closeModal = function () {
        modal.classList.add("hiddenn");
        overlay.classList.add("hiddenn");
        };
        closeModalBtn.addEventListener("click", closeModal);
        overlay.addEventListener("click", closeModal);
        document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !modal.classList.contains("hiddenn")) {
            closeModal();
        }
        });
        const openModal = function () {
        modal.classList.remove("hiddenn");
        overlay.classList.remove("hiddenn");
        };
        openModalBtn.forEach(ele => ele.addEventListener("click", openModal));
    }
    ModalUp();


function redirect(){
    let btn = document.querySelector(".btnB");
    btn.addEventListener("click", ()=>{
        window.location.href ="../pages/bilan.html"
    })
}
redirect();
})