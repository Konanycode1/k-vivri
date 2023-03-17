document.addEventListener('DOMContentLoaded', ()=>{
    function listePerso() {
        let listPerso = localStorage.getItem("perso");
        listPerso = JSON.parse(listPerso);
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

    function tabTacheTerminer() {
        let valeur = localStorage.getItem('tacheTerminer');
        let table = document.querySelector('.TacheTerminer');
        valeur = JSON.parse(valeur);
        valeur.forEach(element => {
            let tr = document.createElement('tr');
            let text = `<td>${element.tache}</td>
            <td>${element.Ajout}</td>
            <td>${element.Termine}</td>
            <td> <i class="fa-sharp fa-solid fa-bell k-color-i-1"></i>
                <i class="fa-solid fa-envelope k-color-i-2"></i></td>`;
            tr.innerHTML = text;
            table.appendChild(tr)
            
        });
        
        
    }
    tabTacheTerminer();
})