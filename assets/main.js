

//Creare un ciclo nel quale vengano visualizzati fino a 100 elementi numerati
for (let i = 1; i <= 100; i++) {

//all interno del ciclo inserire le condizioni con le quali individuare i multipli di 3 e 5
    //condizione nella quale i è divisibile per 3 con resto 0 (i con % =  0 funzionerà??)
    if (i % 15 == 0) {
        const element = `<li class="box fizzbuzz">fizzbuzz</li>`
        list.innerHTML += element

    }

    else if (i % 3 == 0) {
        const element = `<li class="box fizz">fizz</li>`
        list.innerHTML += element

    }
    //condizione nella quale i è divisibile per 5 con resto 0 (i con % =  0 funzionerà??)
    else if (i % 5 == 0) {
        const element = `<li class="box buzz">buzz</li>`
        list.innerHTML += element

    }
    //se non è un multiplo delle condizioni precedenti allora visualizza il numero
    else {
        const element = `<li class="box none">${i}</li>`
        list.innerHTML += element

    }


}

