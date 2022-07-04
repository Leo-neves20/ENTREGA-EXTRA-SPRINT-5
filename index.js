//--------- TAREFA 1 ---------

function kata1(numero){

let contador = []

    for(let i = 1; i <= numero; i++){

        contador.push(i)

    }

    return contador

}

console.log(kata1(25))

//--------- TAREFA 2 ---------

function kata2(numero){

    let contador = []

    for(let i = numero; i >= 1; i--){

        contador.push(i)

    }

    return contador

}

console.log(kata2(25))

//--------- TAREFA 3 ---------

function kata3(numero){

    let contador = []

    for(let i = 1; i <= numero; i++){

        contador.push(i * -1)

    }

    return contador

}

console.log(kata3(25))

//--------- TAREFA 4 ---------

function kata4(numero){

    let contador = []

    for(let i = numero; i >= 1; i--){

        contador.push(i * -1)

    }

    return contador

}

console.log(kata4(25))

//--------- TAREFA 5 ---------

function kata5(numero){

    let contador = []
    let positivos = []
    let negativos = []

    for(let i = numero; i >= 1; i--){
        
        if(i % 2 == 1){

            positivos.push(i)

        }

    }

    for(let j = 1; j <= numero; j++){

        if(j % 2 == 1){

            negativos.push(j * -1)

        }

    }

    contador = positivos.concat(negativos)

    return contador
    
}    

console.log(kata5(25))

//--------- TAREFA 6 ---------

function kata6(numero){

    let contador = []

    for(let i = 1; i < numero; i++){

        if(i % 3 == 0){

            contador.push(i)

        }
    }

    return contador

}

console.log(kata6(100))

//--------- TAREFA 7 ---------

function kata7(numero){
    
    let contador = []

    for(let i = 1; i <= numero; i++){

        if(i % 7 == 0){

            contador.push(i)

        }
    }

    return contador

}

console.log(kata7(100))

//--------- TAREFA 8 ---------

function kata8(numero){

    let contador = []

    for(let i = numero; i > 1; i--){

        if(i % 3 == 0 || i % 7 == 0){

            contador.push(i)

        }

    }

    return contador

}

console.log(kata8(100))

//--------- TAREFA 9 ---------

function kata9(numero){

    let contador = []

    for(let i = 0; i < numero; i++){

        if(i % 5 == 0 && i % 2 == 1){

            contador.push(i)

        }

    }

    return contador

}

console.log(kata9(100))

//--------- TAREFA 10 ---------

function kata10(numero){
    
        let contador = []

        let sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    
        for(let i = 0; i < numero;i++){  
            
            contador.push(sampleArray[i])

        }

    return contador
        
} 

 console.log(kata10(20))

 //--------- TAREFA 11 ---------

function kata11(numero){

   let sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472]; 
   let contador = []

   for(let i = 0; i < numero;i++){

        if(sampleArray[i] % 2 == 0){

            contador.push(sampleArray[i])

        }

   }

   return contador

}

console.log(kata11(20))

//--------- TAREFA 12 ---------

function kata12(numero){

    let sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    let contador = []

    for(let i = 0; i < numero; i++){

        if(sampleArray[i] % 2 == 1){

            contador.push(sampleArray[i])

        }

    }

    return contador

}

console.log(kata12(20))

//--------- TAREFA 13 ---------

function kata13(numero){

    let sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    let contador = []

    for(let i = 0; i < numero; i++){

        if(sampleArray[i] % 8 == 0){

            contador.push(sampleArray[i])

        }

    }

    return contador

}

console.log(kata13(20))

//--------- TAREFA 14 ---------

function kata14(elevadoNumero){

    let sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    
    let contador = []

    for(let i = 0; i < sampleArray.length; i++){

        
        contador.push(Math.pow(sampleArray[i],elevadoNumero))

    }

    return contador

}

console.log(kata14(2))

//--------- TAREFA 15 ---------

function kata15(numero){

    let resultado = 0

    for(let i = 0; i <= numero; i++){

        resultado = resultado + i

    }

    return resultado

}

console.log(kata15(20))

//--------- TAREFA 16 ---------

function kata16(){

    let sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

    let soma = 0

    let resultado = []

    for(let i = 0; i < sampleArray.length; i++){
        
        soma = soma + sampleArray[i]
        

    }

    resultado.push(soma)
    
    return resultado

}

console.log(kata16())

//--------- TAREFA 17 ---------

function kata17(){

    let sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

    let resultado = []

    for(let i = 0; i < sampleArray.length; i++){


        resultado.push(sampleArray[i])

    }  

    return Math.min(...resultado)

}

console.log(kata17())

//--------- TAREFA 18 ---------
 
function kata18(){

    let sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    
    let resultado = []

    for(let i = 0; i < sampleArray.length; i++){

        resultado.push(sampleArray[i])

    }

    return Math.max(...resultado)
 
}

console.log(kata18())

//--------------- FIM :) ----------------




    

 

