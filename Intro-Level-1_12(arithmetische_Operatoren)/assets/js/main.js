// Multiplikation geht vor und so wird 5 * 10 zuerst durchgeführt:

let score = 5 + 5 * 10;
console.log("Ergebnis: " + score);

// - Du kannst Klammern() hinzufügen, um die Reihenfolge der Prioritäten zu ändern:
let score1 = (5 + 5) * 10;
console.log("Ergebnis: " + score1);

// - Du kannst Werte auf Variablen addieren:
let score2 = 0;
score = score2 + 10;
console.log("Ergebnis: " + score);

// - Hiervon gibt es eine verkürzte Version:
score += 10;
console.log("Ergebnis: " + score);

// - Nun probiere es hiermit:
// - Inkrementierungen und Dekrementierungen können wie folgt verwendet werden:
let zahl = 1;
zahl = zahl + 1;
zahl += 1;

// - Verwende den Inkrement-Operator:
zahl++;
console.log("increment: " + zahl);

// - Verwende den Dekrement-Operator:
zahl--;
console.log("dekrement: " + zahl);
