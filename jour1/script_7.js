const phrase = prompt("Salut, ca va ?");

if (phrase.endsWith("?")) {
  console.log("Ouais Ouais...");
}
else if (phrase.trim() === "") {
  console.log("T'es en PLS ?");
}
else if (phrase === phrase.toUpperCase()) {
  console.log("Pwa, calme-toi..");
}
else if (phrase.includes("Fortnite")) {
  console.log("On s' fait une partie soum-soum ?");
}
else {
  console.log("balek");
}