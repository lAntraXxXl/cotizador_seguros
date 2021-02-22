export function obtenerDiferenciaYear(year){
    return new Date().getFullYear()-year;
}

//calcula el total a pagar por marca
export function calcularMarca(marca){
    let incremento;

    switch(marca){
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }
    return incremento;
}
//calcula el tipo de seguro
export function obtenerPlan(plan){
    let costo;
    if(plan === 'basico'){
        costo = 1.20;
    }else{
        costo = 1.50;
    }
    //el if es lo mismo que este ternario de abajo
    //return (plan === 'basico') ? 1.20 : 1.50;
    return costo;
}
//muestra la primer letra en mayuscula
export function primerLetraMayuscula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}