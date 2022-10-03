(()=>{

    //declaracion de arreglos con diferentes tipos de tipado unions types
    const priceType:(number | string | boolean)[] = [1,2,3,'hola',false];
    console.log(priceType);

    //union types
    let userId:string | number =  123;
    console.log(userId);


    function greting(texto: number | string){

        //console.log('texto: ',texto);

        (typeof texto==='string')
            ? console.log(`String ${texto}`)
            : console.log(`number: ${texto}`)
    }

    greting('hello');
    greting(2324);


})();