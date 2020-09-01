// github:
// https://github.com/Camisjef/Unifor_job/blob/master/jobav1.js

function contagem(numi,numf){
    numi = parseInt(numi);
    numf = parseInt(numf);
    var contador = 0;

    for (var i = numi ; i < numf ; i++){
        contador++;
    }
    return contador;
}
var num1 = 30;
var num2 = 80;
var cont = contagem(num1,num2)
console.log(cont);
