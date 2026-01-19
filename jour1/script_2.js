let n = Number(prompt("Entrez un nombre pour calculer sa factorielle :"));
let resultat = 1;

for (let i = 1; i <= n; i++) {
  resultat *= i;
}

console.log(`La factorielle de ${n} est ${resultat}`);
