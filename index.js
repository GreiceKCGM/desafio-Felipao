// 1 Desafio Classificador de nível de Herói.

const tabelaNiveis = [
    { xpMinimo: 0, xpMaximo: 1000, descricao: "Ferro" },
    { xpMinimo: 1001, xpMaximo: 2000, descricao: "Bronze" },
    { xpMinimo: 2001, xpMaximo: 5000, descricao: "Prata" },
    { xpMinimo: 5001, xpMaximo: 7000, descricao: "Ouro" },
    { xpMinimo: 7001, xpMaximo: 8000, descricao: "Platina" },
    { xpMinimo: 8001, xpMaximo: 9000, descricao: "Ascendente" },
    { xpMinimo: 9001, xpMaximo: 10000, descricao: "Imortal" },
    { xpMinimo: 10001, xpMaximo: Infinity, descricao: "Radiante" }
];


let nomeDoHeroi = "Homen-Aranha";

let  xpDoHeroi = 20000;
xpDoHeroi = parseInt(xpDoHeroi);


let nivel;

for (let i = 0; i < tabelaNiveis.length; i++) {
    if (xpDoHeroi >= tabelaNiveis[i].xpMinimo && xpDoHeroi <= tabelaNiveis[i].xpMaximo) {
        nivel = tabelaNiveis[i].descricao;
        break; 
    }
}


console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivel);

/*let nomeHeroi = "Homen-Aranha";
let nivelHeroi = 8005;

if (nivelHeroi <= 1000) {
    console.log("Ferro")
}else if (nivelHeroi >= 1001 && nivelHeroi <= 2000) {
    console.log("Bronze")
}else if (nivelHeroi >= 2001 && nivelHeroi <= 5000) {
    console.log("Prata")
}else if (nivelHeroi >= 6001 && nivelHeroi <= 7000) {
    console.log("Ouro")
}else if (nivelHeroi >= 7001 && nivelHeroi <= 8000) {
    console.log("Platina")
}else if (nivelHeroi >= 8001 && nivelHeroi <= 9000) {
    console.log("Ascendente")
}else if (nivelHeroi >= 9001 && nivelHeroi <= 10000) {
    console.log("Imortal")
}else if (nivelHeroi >= 10001){
    console.log("Radiante")
}else (console.log("Erro"))



console.log("O Herói de nome " + nomeHeroi + "está no nível de " + nivelHeroi)*/
