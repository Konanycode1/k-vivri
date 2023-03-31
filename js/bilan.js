document.addEventListener("DOMContentLoaded", ()=>{
    function BilanTacheJour() {
        let bilanTache = document.querySelector(".bilanTache");
        let bilanMontant = localStorage.getItem("montantTache");
        let perso = localStorage.getItem("perso");
        perso = JSON.parse(perso)
        bilanMontant = JSON.parse(bilanMontant);
        let SomParTa = 0;
        let tacheN= ""
        let tabTach
        let countPerso = 0
        bilanMontant.forEach(element => {
            SomParTa = 0
            countPerso =0
            tabTach = perso.filter(item => item.attache == element.tache);
            tabTach.forEach(ele =>{
                    ele.Montant = ele.Montant != null?ele.Montant : 0
                    SomParTa += parseInt(ele.Montant) ;
                    tacheN = ele.attache 
                    countPerso = ele.Montant != 0?countPerso +=1:countPerso
            })
            let div = document.createElement("div");
            div.className ="bilantaD";
            let text = `
            <h2>${tacheN}</h2>
            <div class="casseSom">
            <p>${SomParTa} <span class="tex">Fr Cfa</span> / ${countPerso} Pers</p>
            </div>
            `;
            div.innerHTML = text
            bilanTache.appendChild(div)
   
        });
        
    }
    BilanTacheJour();

    function CountValue(){
        /*-----Nombre de tâche totale------*/
        let recupMont = localStorage.getItem("montantTache");
        let montantT = document.querySelector(".montantT")
        recupMont= JSON.parse(recupMont);
        let ajouT = document.querySelector(".ajouT");
        let recupTahe = localStorage.getItem("tache");
        recupTahe = JSON.parse(recupTahe);
        ajouT.textContent = `${recupTahe.length} Tâches`
        let somTotalO = 0
        for(i in recupMont){
            somTotalO += parseInt(recupMont[i].montant)
        }
        montantT.textContent = ` ${somTotalO} Fr Pour ${recupTahe.length} Tâches`

        /*-----Nombre d'ouvrier total------*/
        let Toperso = document.querySelector(".Toperso");
        let recupPerso = localStorage.getItem("perso");
        let MonPerso = document.querySelector(".MonPerso");
        let mont = document.querySelector(".mont");
        let depenseGloba = document.querySelector(".depenseGloba")
        recupPerso = JSON.parse(recupPerso)
        Toperso.textContent = `${recupPerso.length} Personnes`;
        let MontantTaux = recupPerso.filter(item => item.Montant != 0);
        let MontantTotal = 0
        if(MontantTaux.length == 0){
            MonPerso.textContent = `${0} Dépensés sur ${O} Ouvriers`
            mont.textContent = `${0} Fr Cfa`
            depenseGloba.textContent = `${0} Fr Cfa`
        }
        else{
            for (let i in MontantTaux) {
                MontantTotal += parseInt(MontantTaux[i].Montant)
            }
            mont.textContent = `${MontantTotal} Fr Cfa`;
            MonPerso.textContent = ` ${MontantTaux.length} Ouvriers`;
            depenseGloba.textContent = `${MontantTotal} Fr Cfa`
        }
        
         /*-----Nombre Offres par mois------*/
         let offresRecuper = document.querySelector(".offresRecuper");``
         let recupoffre = localStorage.getItem("montantTache");
        recupoffre = JSON.parse(recupoffre);
            let offres
        recupoffre = recupoffre.filter(item => item.offre != "Pas d'offres");
        offres = recupoffre[0].offre
        offresRecuper.textContent = `${offres != "Pas d'offres"? offres: "Pas d'offres"}`
    }   
   
    CountValue()

    function bilanSemaine(){

        
    }
    bilanSemaine()
})