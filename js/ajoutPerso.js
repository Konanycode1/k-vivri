document.addEventListener("DOMContentLoaded", ()=>{

    // ajout personnel
    let form = document.getElementById('formAjoutPerso');
    let btnAjout = document.getElementById('btnAjout');
    let nom = document.getElementById('nom')
    let preneom = document.getElementById('prenom');
    let age = document.getElementById('age')
    let domaine = document.getElementById('domaine');
    let attache = document.getElementById('tach');
    let tel = document.getElementById('numero');
   

    // soumettre et stopper l'action du form
    form.addEventListener('submit', (e)=>{
         e.preventDefault();
    })
    // ajouter les information du personnel
    btnAjout.addEventListener('click', ()=>{
        const event = new Date();
        const hre = event.getHours();
        const mnute = event.getMinutes();
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        let perso = localStorage.getItem("perso");
        let data = {
            nom : nom.value,
            preneom : preneom.value,
            age : age.value,
            domaine : domaine.value,
            attache : attache.value,
            tel : tel.value,
            dateAjout :`${hre}:${mnute}`   
        }
        if(perso !== null){
            perso = JSON.parse(perso);
            perso.push(data);
            localStorage.setItem("perso", JSON.stringify(perso));
            window.location.reload();
        }
        else{
            perso = [];
            console.log(perso);
            perso.push(data);
            console.log(perso);
            localStorage.setItem("perso",JSON.stringify(perso));
            window.location.reload()
        } 
    })

let formRegistre = document.getElementById("K-form-registre");
let btnEnregist = document.querySelector(".btn-regist");
let tache = document.getElementById("tache");

formRegistre.addEventListener("submit", (e)=>{
    e.preventDefault();
})
btnEnregist.addEventListener("click", ()=>{
    const event = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    let ajoutTache = {
        tache : tache.value,
        dateAjout: event.toLocaleDateString(),
        dateTermine: "En cours"
    }
    let dataRegist = localStorage.getItem("tache");
    dataRegist = JSON.parse(dataRegist);
    console.log(dataRegist);
    if(dataRegist !== null){
        let isfount = dataRegist.some(element => element.tache === tache.value)
        if(isfount){
            alert("Tâche non terminer");
        }
        else{
            dataRegist.push(ajoutTache)
            localStorage.setItem("tache",JSON.stringify(dataRegist));
            window.location.reload()
        }
    }
    else{
        dataRegist = [];
        dataRegist.push(ajoutTache);
        localStorage.setItem("tache", JSON.stringify(dataRegist));
        window.location.reload();
    }

})

})