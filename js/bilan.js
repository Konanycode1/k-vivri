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
            console.log(tabTach)
            tabTach.forEach(ele =>{
                    ele.Montant = ele.Montant != null?ele.Montant : 0
                    SomParTa += parseInt(ele.Montant) ;
                    console.log(SomParTa)
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


                    // SomParTa +=parseInt(item.Montant) ;
                    // tacheN = item.attache
                    // let div = document.createElement("div");
                    // div.className = "bilantaD";
                    // let text = `
                    // <h2>${tacheN}</h2>
                    // <div class="casseSom">
                    // <p>${SomParTa} <span class="tex">Fr Cfa</span></p>
                    // </div>
                    // `;
                    // div.innerHTML = text
                    // bilanTache.appendChild(div)

                
            
            
        });
        console.log(SomParTa)
        
    }
    BilanTacheJour();
    function bilanSemaine(){
        
    }
})