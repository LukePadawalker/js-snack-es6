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


const biciclette = [
  { name: 'Bianchi',
    peso: 8 },
  { name: 'Trek', 
    peso: 7 },
  { name: 'Specialized', 
    peso: 12 },
  { name: 'Cannondale', 
    peso: 9 }
];



