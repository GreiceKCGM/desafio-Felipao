// 1 Desafio Classificador de nível de Herói

let nomeHeroi = "Homen-Aranha";
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



console.log("O Herói de nome " + nomeHeroi + "está no nível de " + nivelHeroi)
