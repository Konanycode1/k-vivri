document.addEventListener("DOMContentLoaded", ()=>{
    function CountOuvrier() {
        let nmber = localStorage.getItem('perso');
        let nbrOu = document.querySelector('.nbrOu');
        nmber  = JSON.parse(nmber)
        nbrOu.textContent = `${nmber.length} Pers`;
    }CountOuvrier();

    function CountTache() {
        let nmber = localStorage.getItem('tache');
        let nbrTac = document.querySelector('.nbrTac');
        nmber  = JSON.parse(nmber)
        nbrTac.textContent = `${nmber.length} Tâches`;
    }CountTache();

    function CountAdmin() {
        let nmber = localStorage.getItem('admin');
        let nbrTac = document.querySelector('.nbrAdmin');
        if (nmber !== null) {
            nmber  = JSON.parse(nmber);
            nbrTac.textContent = `${nmber.length} Admin`;
        } else {
            nbrTac.textContent = `${0} Admin`;
        }
    }CountAdmin();

    function recupAdminList() {
        let adminList = document.querySelector(".adminList");
        let admin = localStorage.getItem("admin");
        admin = JSON.parse(admin);
        admin.forEach(element => {
            let div = document.createElement("div");
            div.className = "listen";
            let text = `
            <img src="../assets/image/ad1.jpeg" alt="">
            <h3>${element.nomPrenom}</h3>
            <p class="eclipAdmin"></p>
            ` 
            div.innerHTML = text;
            adminList.appendChild(div);
            console.log(element)
            
        });
        
    }
    recupAdminList()

})