( ()=>{

    //declaracion de tipado para arreglos
    const price:number[] = [1,2,3,4,5,6,7,8,9,10];
    console.log(price);

    //declaracion de arreglos con diferentes tipos de tipado
    const priceType:(number | string | boolean)[] = [1,2,3,'hola',false];

    console.log(priceType);


})();   