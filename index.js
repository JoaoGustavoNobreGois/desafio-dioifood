let nome = prompt("Digite o nome do herói")
let exp = parseInt(prompt("Digite o XP do herói"))

if(exp<=1000){
    console.log("O herói de nome " + nome + " está no nível de ferro")
}
else if(exp>=1001 && exp<2001){
    console.log("O herói de nome " + nome + " está no nível de bronze")
}
else if(exp>=2001 && exp<5001){
    console.log("O herói de nome " + nome + " está no nível de prata")
}
else if(exp>=5001 && exp<7001){
    console.log("O herói de nome " + nome + " está no nível de ouro")
}
else if(exp>=7001 && exp<8001){
    console.log("O herói de nome " + nome + " está no nível de platina")
}
else if(exp>=8001 && exp<=9001){
    console.log("O herói de nome " + nome + " está no nível de ascendente")
}
else if(exp>=9001 && exp<10001){
    console.log("O herói de nome " + nome + " está no nível de imortal")
}
else if(exp>=10001){
    console.log("O herói de nome " + nome + " está no nível de radiante")
}
