document.addEventListener('DOMContentLoaded', ()=>{
    let data = localStorage.getItem("SessionUser");
    let verifSuper = localStorage.getItem("superAdmin");
    let verifAdmin =  localStorage.getItem("admin");
    let para = document.querySelector('.user');
    let listPersonel = document.querySelector(".listPersonel");
    let adminListelem = document.querySelector(".adminListelem");
    let adminListperso =  document.querySelector(".adminList-perso");
    const dat = new Date()

    verifAdmin = JSON.parse(verifAdmin);
    verifSuper = JSON.parse(verifSuper);
    data = JSON.parse(data);
    console.log(verifAdmin);
    let logStatus = false;
    // data = data.find(element => element.admin);
    if(data.statut === "admin"){
        listPersonel.style.display = "none"
        adminListelem.style.display = "none"
        adminListperso.style.display = "none"
    }

    if(data.user === verifAdmin.user ||verifAdmin.some(item => item.user)){
        logStatus = true;
        para.style.color = "white"
        para.style.marginLeft = "5px"
        para.textContent = data.user;
        
    }
    else{
        logStatus;
        console.log("ok")
    }  
    affiTache()
    function affiTache() {
        let recupData = localStorage.getItem("tache");
        let recupTachTer = localStorage.getItem('tacheTerminer');
        let ajoutContent = document.querySelector('.contentTacheS');

        recupData = JSON.parse(recupData);

        for (let i = 0; i < recupData.length; i++) {
           
            if(recupData[i].dateTermine === "En cours"){
                let div = document.createElement ("div");
                div.className = "divTach"
                div.innerHTML = `
                <h3>${recupData[i].tache}</h3>
                <input type="button" class="terminer" value="Terminée">`;
                ajoutContent?.appendChild(div)
            } 
        }
        let div2 = document.createElement('div')
        div2.className = "dat";
        div2.innerHTML = `<h4>${dat.toLocaleDateString()}</h4>`;
        ajoutContent?.appendChild(div2)  
        
    }
    
    
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
                let data;

                recupVal = recupVal.map(element => {
                    if(element.tache === texte){
                       console.log(element.tache)
                         data = {
                            tache: element.tache,
                            dateTermine : dat.toLocaleDateString(),
                            dateAjout: element.dateAjout
                        }
                        console.log(data)
                    }else{
                        return element
                    }
                    return data
                });
                localStorage.setItem("tache", JSON.stringify(recupVal));
                window.location.reload();

            }
            
        }));
    }
    BtnTerminer();
})