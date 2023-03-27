document.addEventListener('DOMContentLoaded', ()=>{
    // appel function créer
    ListePerso();
    
    // appel function créer
    function ListePerso() {
        let recupPerson = localStorage.getItem('perso');
        recupPerson = JSON.parse(recupPerson);
        let meTable = document.querySelector(".k-perso-table");
        recupPerson.forEach(element => {
            let tr = document.createElement("tr"); 
          


            let text = `
            <td class="id">${element.id}</td>
            <td class="nomPrenom">${element.nom} ${element.prenom}</td>
            <td class="dateajout">${element.dateAjout}</td>
            <td class="terminerTch">
                  <div class="button r" id="button-1">
                    <input type="checkbox" class="checkbox" elment="${element.id}">
                    <div class="knobs"></div>
                    <div class="layer"></div>
                  </div>
                
            </td>
            <td class="tache">${element.attache}</td>
            <td>Encours</td>
            <td class="valPaie">${element.statutPaie ? element.statutPaie : "Non payé"}</td>
            <td class="valider"> 
                <svg fill="#ffff" width="20px" height="20px" class="Modif" viewBox="-1.6 -1.6 19.20 19.20" xmlns="http://www.w3.org/2000/svg" stroke="#ffff">

                <g id="SVGRepo_bgCarrier" stroke-width="0">

                <rect x="-1.6" y="-1.6" width="19.20" height="19.20" rx="1.92" fill="blue" class="upd" strokewidth="0"/>

                </g>

                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                <g id="SVGRepo_iconCarrier">

                <path d="M15.49 7.3h-1.16v6.35H1.67V3.28H8V2H1.67A1.21 1.21 0 0 0 .5 3.28v10.37a1.21 1.21 0 0 0 1.17 1.25h12.66a1.21 1.21 0 0 0 1.17-1.25z"/>

                <path d="M10.56 2.87 6.22 7.22l-.44.44-.08.08-1.52 3.16a1.08 1.08 0 0 0 1.45 1.45l3.14-1.53.53-.53.43-.43 4.34-4.36.45-.44.25-.25a2.18 2.18 0 0 0 0-3.08 2.17 2.17 0 0 0-1.53-.63 2.19 2.19 0 0 0-1.54.63l-.7.69-.45.44zM5.51 11l1.18-2.43 1.25 1.26zm2-3.36 3.9-3.91 1.3 1.31L8.85 9zm5.68-5.31a.91.91 0 0 1 .65.27.93.93 0 0 1 0 1.31l-.25.24-1.3-1.3.25-.25a.88.88 0 0 1 .69-.25z"/>

                </g>

                </svg>
                <svg width="20px" height="20px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="">

                <g id="SVGRepo_bgCarrier" stroke-width="0">
                
                <rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="3.168" fill="red" strokewidth="0"/>
                
                </g>
                
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                
                <g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M14 12V17" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M4 7H20" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
                
                </svg></td>
            `;
            tr.innerHTML = text
            meTable.appendChild(tr)
                        
        
            
        });  
    }

    function actionPersonTerminer() {
        let btnTer = document.querySelectorAll(".checkbox");
        let perso = localStorage.getItem("perso");
        perso = JSON.parse(perso)
        btnTer.forEach(element =>  element.addEventListener("click", ()=>{
            let recupValue;
            let parent =  element.closest("tr");
            let user =  parent.querySelector(".nomPrenom").textContent;
            let id = parent.querySelector('.id').textContent;
            let terminer = parent.querySelector('.terminerTch');
            let date = new Date();
            if(element.value == "on"){
                element.disabled = true;
                recupValue = perso.map(item =>{
                    let meDAta;
                    if(item.id == id){
                        meDAta = {
                            id:item.id,
                            nom:item.nom,
                            prenom:item.prenom,
                            age:item.age,
                            domaine:item.domaine,
                            attache:item.attache,
                            tel:item.tel,
                            Montant: item.Montant !== null? item.Montant: "Non assigné",
                            dateAjout:item.dateAjout,
                            statutPaie:item.statutPaie,
                            tacheTerminer: "Terminer",
                            heureTerminer: `${date.getHours()} : ${date.getMinutes()} du  ${date.toLocaleDateString()}`
                        }
                        // terminer.textContent = `${date.getHours()} : ${date.getMinutes()} du  ${date.toLocaleDateString()}`

                    }
                    else{
                        return item
                    }
                    return meDAta
                })
                localStorage.setItem("perso", JSON.stringify(recupValue));
                window.location.reload();
                

            }
        }) );
    }
    actionPersonTerminer();

let checkbox = document.querySelectorAll(".checkbox")

function activ(eve) {
    
    if( eve.length != 0 ){
        console.log("ok")
        eve.forEach(item => {
            let verif = item.getAttribute("elment");
            let perso = JSON.parse(localStorage.getItem("perso")).filter(key => key.id == verif);
            if(perso[0].tacheTerminer){
                let parent = item.closest("td")
                parent.textContent = perso[0].heureTerminer
            }
            
        })
    }

    
}
activ(checkbox)


// checkbox.forEach(ele => {
//     let psr = localStorage.getItem("perso");
//     let parent = ele.closest("tr")
//     console.log(parent)
//     psr = JSON.parse(psr)
//     event = event.target.getAttribute("elment");
//     psr.map(item =>{
//         if(item.id == event && item.heureTerminer){
//             alert("ok")
//                 let terminer = parent.querySelector('.terminerTch');
//                 console.log(terminer)
//                 terminer.innerHTML = item.heureTerminer
//         }
//     })

// } )


   
})

