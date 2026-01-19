const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

const allborrow = books.every(books => books.rented > 0);
if (allborrow) {
  console.log("Tous les livres ont été empruntés au moins une fois");
} else {
  console.log("Certains livres n'ont jamais été empruntés");
}


const mostborrow = books.reduce((max, books) => books.rented > max.rented ? books : max);
console.log("Le livre le plus emprunter est :",mostborrow.title)


const minborrow = books.reduce((min, books) => books.rented < min.rented ? books : min);
console.log("Le livre le moins emprunter est :",minborrow.title)


const idsearch = 873495;
const searchbook = books.find(books => books.id === idsearch);
console.log(searchbook);


const eraseid = 133712;
const erasebook = books.filter(books => books.id !== eraseid);
books.sort((a, b) => a.title > b.title ? 1 : -1);
console.log(erasebook); 
