document.addEventListener("DOMContentLoaded", ()=>{
    function tacheEncours() {
        let listeTac = document.querySelector(".listeTac");
        let recupTache = localStorage.getItem("tache");
        recupTache = JSON.parse(recupTache)
        recupTache.map(ele => {
            if(ele.dateTermine === "En cours"){
                let option = document.createElement('option');
                option.value = ele.tache;
                option.textContent = ele.tache
                listeTac.appendChild(option);
            }
      
        });
    }
    tacheEncours();

    function MontantTache() {
        let tache = document.getElementById('tache');
        let montant = document.getElementById('montant');
        let statut = document.getElementById('statut');
        let par = document.getElementById('par');
        let offre = document.getElementById('offre');
        let btnMontant = document.getElementById('btnMontant');
        montant.addEventListener("submit", (e)=>{
            e.preventDefault();
        })
        
        let montantTache = localStorage.getItem("montantTache");
        btnMontant.addEventListener("click", ()=>{
            
           let offres = offre.value? offre.value != "": "Pas d'offres"
            let data = {
                tache: tache.value,
                montant : montant.value,
                statut: statut.value,
                durer : par.value,
                offre: offres
            }
            montantTache =JSON.parse(montantTache);
            console.log(montantTache);
            if(montantTache != null || montantTache === []){
                console.log("ok");
                montantTache.push(data);
                localStorage.setItem("montantTache", JSON.stringify(montantTache));
                // window.location.reload();
            }
            else{
                montantTache = [];
                montantTache.push(data)
                localStorage.setItem("montantTache", JSON.stringify(montantTache));
                // window.location.reload();
            }
        })  
    }
    MontantTache();

    AttriMontant();
    function AttriMontant() {
        let recupMontantTache = localStorage.getItem("montantTache");
        recupMontantTache = JSON.parse(recupMontantTache);
        let mytable = document.querySelector("tbody");
       if(recupMontantTache != null){
            recupMontantTache.forEach(element => {
                let tr = document.createElement("tr");
                let text = `
                <td class="statusTache">${element.statut}</td>
                <td class="tachRe">${element.tache}</td>
                <td class="mntn">${element.montant}Fr Cfa</td>
                <td class="dure">${element.durer}</td>
                <td>
                <svg  class="btn btn-open" fill="#ffff" width="20px" height="20px" viewBox="-1.6 -1.6 19.20 19.20" xmlns="http://www.w3.org/2000/svg" stroke="#ffff">

                <g id="SVGRepo_bgCarrier" stroke-width="0">

                <rect x="-1.6" y="-1.6" width="19.20" height="19.20" rx="1.92" fill="blue" strokewidth="0"/>

                </g>

                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                <g id="SVGRepo_iconCarrier">

                <path d="M15.49 7.3h-1.16v6.35H1.67V3.28H8V2H1.67A1.21 1.21 0 0 0 .5 3.28v10.37a1.21 1.21 0 0 0 1.17 1.25h12.66a1.21 1.21 0 0 0 1.17-1.25z"/>

                <path d="M10.56 2.87 6.22 7.22l-.44.44-.08.08-1.52 3.16a1.08 1.08 0 0 0 1.45 1.45l3.14-1.53.53-.53.43-.43 4.34-4.36.45-.44.25-.25a2.18 2.18 0 0 0 0-3.08 2.17 2.17 0 0 0-1.53-.63 2.19 2.19 0 0 0-1.54.63l-.7.69-.45.44zM5.51 11l1.18-2.43 1.25 1.26zm2-3.36 3.9-3.91 1.3 1.31L8.85 9zm5.68-5.31a.91.91 0 0 1 .65.27.93.93 0 0 1 0 1.31l-.25.24-1.3-1.3.25-.25a.88.88 0 0 1 .69-.25z"/>

                </g>

                </svg>
                <svg  id="suprim" width="20px" height="20px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="">

                <g id="SVGRepo_bgCarrier" stroke-width="0">
                
                <rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="3.168" fill="red" strokewidth="0"/>
                
                </g>
                
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                
                <g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M14 12V17" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M4 7H20" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
                
                </svg></td>`;
                tr.innerHTML = text;
                mytable.appendChild(tr)
                
            });
       }  
    }

    function Paiement() {
        let recuPerso = localStorage.getItem("perso");
        let identi = document.getElementById("identi");
        let paie =  document.getElementById("paie");
        let form = document.getElementById("Paye");
        let btnPaie = document.getElementById("btnPaie")
        recuPerso = JSON.parse(recuPerso);
        form.addEventListener("click", (e)=>{
            e.preventDefault();
        });
            btnPaie.addEventListener("click", ()=>{
                recuPerso = recuPerso != null? recuPerso: alert("Pas d'ouvrier enregistrer");
                // let myMontant = localStorage.getItem("montantTache");
                // myMontant = JSON.parse(myMontant);
                // myMontant = myMontant.filter(item => item.montant != null ? item :0)
                // paie.value = myMontant != 0? myMontant[0].montant:0
                recuPerso =  recuPerso.map(ele => {
                     let data;
                     if(ele.id === identi.value){
                         data = {
                             id :ele.id, 
                             nom :ele.nom,
                             prenom : ele.prenom,
                             age : ele.age,
                             domaine : ele.domaine,
                             attache : ele.attache,
                             tel : ele.tel,
                             dateAjout : ele.dateAjout,
                             statutPaie : "Payé",
                             Montant : paie.value
                         }
                     }
                     else{
                         return ele;
                     }
                     return data;
                 }); 
                 localStorage.setItem("perso",JSON.stringify(recuPerso))
             }) 
    }
    Paiement();


    function DeletePaie() {
        let dele = document.querySelectorAll("#suprim");
        let isPass = false;
        dele.forEach(clic =>clic.addEventListener("click", ()=>{
            let parent = clic.closest("tr");
            let first = parent.querySelector(".tachRe").textContent
            let recupPaie = localStorage.getItem("montantTache");
            recupPaie = JSON.parse(recupPaie);
            let recupEle = recupPaie.filter(item => item.tache === first);
            isPass = true;
            if(isPass){
                
                recupEle.map(ele => {
                    let listeTache =  localStorage.getItem("listeTache");
                    listeTache = JSON.parse(listeTache);
                    if(listeTache !== null){
                        listeTache.push(ele);
                        localStorage.setItem('listeTache', JSON.stringify(listeTache));
                    }
                    else{
                        listeTache = [];
                        listeTache.push(ele);
                        console.log(listeTache);
                        localStorage.setItem('listeTache', JSON.stringify(listeTache));
                    }
                       
                })
                recupPaie = recupPaie.filter(item => item.tache != first);
                localStorage.setItem("montantTache", JSON.stringify(recupPaie));
                window.location.reload();
            }
        }));   
    }
    DeletePaie();

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

    function UpdateMontant(){
        let btn = document.querySelectorAll(".btn-open");
        btn.forEach(clic=> clic.addEventListener("click", ()=>{
            let modalForm = document.querySelector(".modaltache");
            let btn = document.getElementById("btnSubmi");
            let data = localStorage.getItem("montantTache");
            let tache = document.getElementById("tacheModal");
            let montant = document.getElementById("montantModal");
            let status = document.getElementById("statusModal");
            let durer = document.getElementById("durerModal");
            let offre = document.getElementById("offreModal");
            data = JSON.parse(data);
            let parent = clic.closest('tr');
            let tachTr = parent.querySelector(".tachRe").textContent;
            let statusTr = parent.querySelector(".statusTache").textContent
            let montantTr = parent.querySelector(".mntn").textContent

            tache.value = tachTr;
            montant.value = montantTr
           
            modalForm.addEventListener("submit", (e)=>{
                e.preventDefault();
            });
            btn.addEventListener("click", ()=>{
                let recupValue = data.map(item => {
                    let myData;
                    if(item.tache === tachTr){
                        myData = {
                            tache : tache.value,
                            montant : montant.value,
                            statut:status.value,
                            offre : offre.value==""?"Pas d'offre": offre.value,
                            durer:durer.value
                        }
                    }
                    else{
                        return item
                    }
                    return myData
                } )
                console.log(recupValue)
                localStorage.setItem("montantTache", JSON.stringify(recupValue));
                window.location.reload();
            }) 
        }))
    }
    UpdateMontant();
})