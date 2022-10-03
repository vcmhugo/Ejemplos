( ()=>{

    let nameProduct = 'my amazing product';
    console.log(nameProduct);
    nameProduct = 'my amazing product 02';

    //forma de tipado con tsc
    let nameProductosStock: string = 'description product';

    console.log(nameProductosStock);

    ///utilizacion de back sticks y tipados
    let priceProduct: number = 100;
    let stockV:boolean = false;
    let nameProd:string = 'my product';

    const data = `
        Price: ${priceProduct}
        Stock: ${stockV}
        Name: ${nameProd}
    `;
    
    console.log(data);

})();