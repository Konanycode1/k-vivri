// <block:setup:1>



let ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["j1","j2","j3","j4","j5","j6","j7"],
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "Nettoyage",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [282,350,411,502,635,809,947,1402,3700,5267],
        label: "Remplissage",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [168,170,178,190,203,276,408,547,675,734],
        label: "Emballage",
        borderColor: "#3cba9f",
        fill: false
      }, { 
        data: [40,20,10,16,24,38,74,167,508,784],
        label: "Livraison",
        borderColor: "#e8c3b9",
        fill: false
      }, { 
        data: [6,3,2,2,7,26,82,172,312,433],
        label: "Semence",
        borderColor: "#c45850",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "L'évolution des tâches"
    }
  }
});