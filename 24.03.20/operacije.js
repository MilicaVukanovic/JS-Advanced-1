const Operacije = {
    "E" : 2.729,
    "saberi" : (a, b) => {return a + b; },
    "oduzmi" : (a, b) => {return a - b; },
    "napredne" : {
        "stepenovanje" : (a,b) => {
            return Math.pow(a,b);
        }
    }
}

console.log(Operacije.napredne.stepenovanje(2,3));