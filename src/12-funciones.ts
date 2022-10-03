(()=>{

    type sizes = 'M' | 'L' | 'XL';

    function createProductToJson(
        title:string,
        createDate: Date,
        stock: number,
        size:sizes
    ){
        return{

            title,
            createDate,
            stock,
            size
        }
    }

    const products = createProductToJson('shirt',new Date(),200,'XL');

    console.log(products);
    console.log(products.title);
    console.log(products.stock);



    //funcion coin envio opcional con tipado
    const createProductToJsonV2 = (
        title:string,
        createDate: Date,
        stock: number,
        //la varible es opcional 
        size?:sizes
    )=>{
        return{

            title,
            createDate,
            stock,
            size
        }
    }

    let productsV2 = createProductToJsonV2('shirt',new Date(),200,'XL');

    console.log(productsV2);
    productsV2 = createProductToJsonV2('shirt',new Date(),200);
    console.log(productsV2);

    console.log(productsV2.title);
    console.log(productsV2.stock);



  

})();