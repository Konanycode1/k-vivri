document.addEventListener("DOMContentLoaded", ()=>{
    let form = document.getElementById('formAjoutPerso');
    let btnAjout = document.getElementById('btnAjout');
    let nom = document.getElementById('nom')
    let preneom = document.getElementById('prenom');
    let age = document.getElementById('age')
    let domaine = document.getElementById('prenom');
    let attache = document.getElementById('tach');
    let tel = document.getElementById('numero');



    form.addEventListener('submit', (e)=>{
         e.preventDefault();
    })
    btnAjout.addEventListener('click', ()=>{

        let data = {
            nom : nom.value,
            preneom : preneom.value,
            age : age.value,
            domaine : domaine.value,
            attache : attache.value,
            tel : tel.value
        }
        console.log(data);
       
    })
    

})