const proteine = {
  "UCU" : "Sérine",
  "UCC" : "Sérine",
  "UCA" : "Sérine",
  "UCG" : "Sérine",
  "AGU" : "Sérine",
  "AGC" : "Sérine",
  "CCU" : "Proline",
  "CCC" : "Proline",
  "CCA" : "Proline",
  "CCG" : "Proline",
  "UUA" : "Leucine",
  "UUG" : "Leucine",
  "UUU" : "Phénylalanine",
  "UUC" : "Phénylalanine",
  "CGU" : "Arginine",
  "CGC" : "Arginine",
  "CGA" : "Arginine",
  "CGG" : "Arginine",
  "AGA" : "Arginine",
  "AGG" : "Arginine",
  "UAU" : "Tyrosine",
  "UAC" : "Tyrosine"
};

const arn = "UUACGCAGUAGA , CCGUCGUUGCGCUACAGC"
const proteineArray = [];
for (let i = 0; i < arn.length; i += 3) {
  proteineArray.push(arn.slice(i, i + 3));
};

const proteine = proteineArray.map(proteine => proteine[proteine]);

const resultat = proteine.join("-");
console.log(resultat);

