document.addEventListener("DOMContentLoaded", ()=>{
    let form = document.getElementById('formAjoutPerso');
    let btnAjout = document.getElementById('btnAjout');
    let nom = document.getElementById('nom')
    let preneom = document.getElementById('prenom');
    let age = document.getElementById('age')
    let domaine = document.getElementById('domaine');
    let attache = document.getElementById('tach');
    let tel = document.getElementById('numero');
    



    form.addEventListener('submit', (e)=>{
         e.preventDefault();
    })
    btnAjout.addEventListener('click', ()=>{
        let perso = localStorage.getItem("perso");
        let recup = [];
        let data = {
            nom : nom.value,
            preneom : preneom.value,
            age : age.value,
            domaine : domaine.value,
            attache : attache.value,
            tel : tel.value
        }

        if(perso !== null){
            perso = JSON.parse(perso);
            perso.push(data);
            localStorage.setItem("perso", JSON.stringify(perso))
        }
        else{
            perso = [];
            console.log(perso)
            perso.push(data);
            console.log(perso)
            localStorage.setItem("perso",JSON.stringify(perso))
        }
       
    })
    

})