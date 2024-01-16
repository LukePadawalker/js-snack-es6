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


