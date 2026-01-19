console.log("Salut, bienvenue dans ma super pyramide !");

let n = Number(prompt("Combien veux tu d'etages ?"));

for (let i = 1; i <= n; i++) {
  console.log("#".repeat(i));
}
