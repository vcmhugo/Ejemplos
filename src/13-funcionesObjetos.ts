(()=>{


    //destructuracion de tipados en una funcion 

    const login = (data:{email:string, password:number}) =>{

        console.log(`email:${data.email}  password: ${data.password}`);

    }

    //login('io@gmail.com','123456');
    //Los datos de envian en un objeto 
    
    login({
        email:'io@gmail.com',
        password:123456
    })

    type sizes = 'M' | 'L' | 'XL';

    const products: any[] = [];
    const addProduct = (
        data:
            {
                title:string,
                createDate:Date,
                stock:number,
                size?:sizes
            }
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


