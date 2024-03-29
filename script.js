console.log("JS OK");

// # SNACK 1
// Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo  e la lista degli invitati in ordine di posto.
// Per stampare il tutto,  la tipografia  vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell'ospite e posto occupato.
// Generiamo questo array in una variabile guestsList e stampiamolo in console

const tableName = 'Tavolo Vip';

const guests = [
  'Brad Pitt',
  'Johnny Depp',
  'Lady Gaga',
  'Cristiano Ronaldo',
  'Georgina Rodriguez',
  'Chiara Ferragni',
  'Fedez',
  'George Clooney',
  'Amal Clooney',
  'Maneskin'
];

const guestsList = [];


guests.forEach((guest, index) => {

    const participant = tableName + ", " + (index + 1);
    // console.log(participant);
    guestsList.push(participant);
});

console.log(guestsList);



// # SNACK 2
// Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
// Per preparare l'aula di un nuovo corso, dobbiamo svolgere una serie di operazioni
// 1. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// 2.Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
// 3.  dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO DELLA ROVERE);



const facolta = [
  {
    id: "213",
    name: "Marco della Rovere",
    grades: "78"
  },
  {
    id: "110",
    name: "Paola Cortellessa",
    grades: "96"
  },
  {
    id: "250",
    name: "Andrea Mantegna",
    grades: "48"
  },
  {
    id: "145",
    name: "Gaia Borromini",
    grades: "74"
  },
  {
    id: "196",
    name: "Luigi Grimaldello",
    grades: "68"
  },
  {
    id: "102",
    name: "Piero della Francesca",
    grades: "50"
  },
  {
    id: "120",
    name: "Francesca da Polenta",
    grades: "84"
  }
]

// 1. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// filter

let upperSeventy = facolta.filter(student => student.grades >= "70")
console.log(upperSeventy);


// 2.Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
// filter

let upperId = facolta.filter(student => student.grades >= "70" && student.id >= "120")
console.log(upperId);


// 3.  dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO DELLA ROVERE);
// map

let upperCase = facolta.map(student => student.name.toUpperCase())
console.log(upperCase);

// SNACK 3
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: name e peso.
// Stampare in console la bici con peso minore utilizzando il destructuring


// creo un array di bici
const biciclette = [
  { name: 'Bianchi',
    peso: 8 
  },
  { name: 'Trek', 
    peso: 7 
  },
  { name: 'Specialized', 
    peso: 12 
  },
  { name: 'Cannondale', 
    peso: 9 
  }
];


// creo una variabile di confronto
let biciLeggera = biciclette[0];


// verifico ogni elemento dell'array e vedo se è minore della bici in variabile
biciclette.forEach(bici => {
  if (bici.peso < biciLeggera.peso){
    biciLeggera = bici;
  }
})

// stampo in console il risultato finale
console.log(biciLeggera);



// # SNACK 4
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// nome sarà l’unica proprietà da inventare voi, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.
// Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console


// creaimo un array
const squadreDiCalcio = [
  { nome: 'Juventus',
    punti: 0,
    falli: 0 
  },
  { nome: 'Milan', 
    punti: 0, 
    falli: 0 
  },
  { nome: 'Inter', 
    punti: 0, 
    falli: 0 
  },
  { nome: 'Roma', 
    punti: 0, 
    falli: 0 
  },
  { nome: 'Lazio', 
  punti: 0, 
  falli: 0 
  },
  { nome: 'Napoli', 
  punti: 0, 
  falli: 0 
  }
];


// creiamo una funzione che generi un numero random
const randomNum = () => {
  return Math.floor(Math.random() * 100) + 1;
};


// per ogni squadra di calcio generiamo un numero random e inseriamolo
squadreDiCalcio.forEach(squadra => {
  squadra.punti = randomNum();
  squadra.falli = randomNum();
});

// da ogni elemento dell'array, estraiamo il nome e i falli
const nomiEFalli = squadreDiCalcio.map(({ nome, falli }) => ({ nome, falli }));

console.log(nomiEFalli);



