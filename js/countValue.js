document.addEventListener("DOMContentLoaded", ()=>{
    function CountOuvrier() {
        let nmber = localStorage.getItem('perso');
        let nbrOu = document.querySelector('.nbrOu');
        nmber  = JSON.parse(nmber)
        nbrOu.textContent = `${nmber.length} Pers`;
    }CountOuvrier();

    function CountTache() {
        let nmber = localStorage.getItem('tache');
        let nbrTac = document.querySelector('.nbrTac');
        nmber  = JSON.parse(nmber)
        nbrTac.textContent = `${nmber.length} Tâches`;
    }CountTache();

    function CountAdmin() {
        let nmber = localStorage.getItem('admin');
        let nbrTac = document.querySelector('.nbrAdmin');
        if (nmber !== null) {
            nmber  = JSON.parse(nmber);
            nbrTac.textContent = `${nmber.length} Admin`;
        } else {
            nbrTac.textContent = `${0} Admin`;
        }
    }CountAdmin();

})