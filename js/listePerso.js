document.addEventListener('DOMContentLoaded', ()=>{
    function listePerso() {
        let listPerso = localStorage.getItem("perso");
        listPerso = JSON.parse(listPerso)
        console.log(listPerso);
        listPerso.forEach(element => {
            let div = document.createElement('div');
            let adminList = document.querySelector(".adminList");
            div.className ="listen";
            let text = `<h3>${element.nom} ${element.prenom}</h3>
                        <p class="">${element.dateAjout}</p>`
            div.innerHTML = text;
            adminList.appendChild(div);

        });
        
    }
    listePerso()
})