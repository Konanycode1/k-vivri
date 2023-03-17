document.addEventListener('DOMContentLoaded', ()=>{
    let data = localStorage.getItem("SessionUser");
    let verifSuper = localStorage.getItem("superAdmin");
    let verifAdmin =  localStorage.getItem("admin");
    let para = document.querySelector('.user');
    const dat = new Date()

    verifAdmin = JSON.parse(verifAdmin);
    verifSuper = JSON.parse(verifSuper);
    data = JSON.parse(data);
    let logStatus = false;
    // data = data.find(element => element.admin);

    if( data.user == verifSuper.admin || data.user == verifAdmin.admin ){
        logStatus = true;
        para.style.color = "white"
        para.style.marginLeft = "5px"
        para.textContent = data.user;
    }
    else{
        logStatus;
    }  
 
    function affiTache() {
        let recupData = localStorage.getItem("tache");
        let recupTachTer = localStorage.getItem('tacheTerminer');
        let ajoutContent = document.querySelector('.tacheEncour');

        recupData = JSON.parse(recupData);
        // console.log(recupData)  

        for (let i = 0; i < recupData.length; i++) {

            console.log(recupData[i].tache);
            let div = document.createElement ("div");
            div.className = "divTach"
            div.innerHTML = `
            <h3>${recupData[i].tache}</h3>
            <input type="button" class="terminer" value="Terminée">`;
            ajoutContent.appendChild(div)
            
        }
        let div2 = document.createElement('div')
        div2.className = "dat";
        div2.innerHTML = `<h4>${dat.toLocaleDateString()}</h4>`;
        ajoutContent.appendChild(div2)  
    }
    affiTache()
    
    function BtnTerminer() {
        let btnSelect = document.querySelectorAll('.terminer');
        let isfount = false;
        btnSelect.forEach(element => element.addEventListener('click', ()=>{
            isfount = true;
            if (isfount) {
                let recupVal = localStorage.getItem("tache");
                let parent = element.closest('.divTach');
                let texte = parent.querySelector("h3").textContent;
                recupVal = JSON.parse(recupVal);
                const dat = new Date()

                recupVal.forEach(element => {
                    if(element.tache === texte){
                        let objet = {
                            tache: element.tache,
                            Termine : dat.toLocaleDateString(),
                            Ajout: element.dateAjout
                        }
                        let tacheTer = localStorage.getItem("tacheTerminer")
                        if(tacheTer !== null){
                            tacheTer = JSON.parse(tacheTer);
                            tacheTer.push(objet);
                            localStorage.setItem('tacheTerminer', JSON.stringify(tacheTer));
                             
                        }
                        else{
                            tacheTer = [];
                            tacheTer.push(objet);
                            localStorage.setItem('tacheTerminer', JSON.stringify(tacheTer))  
                        }
                        
                    }
                    
                });
            }
            
        }));
    }
    BtnTerminer()
})