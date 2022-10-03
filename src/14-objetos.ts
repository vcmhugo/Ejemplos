(()=>{

    type productsType = {

                        title:string,
                        createDate:Date,
                        stock:number,
                        size?:sizes
                    }


    type sizes = 'M' | 'L' | 'XL';

    const products: productsType[] = [];
    const addProduct = (
        data:productsType
    ) =>{
        
        products.push(data);
    }

    addProduct({
        title:'shirt',
        createDate:new Date(),
        stock:200,
        size:'XL'
    });

    console.log(products);

})();

