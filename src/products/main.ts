import {addProduct,products} from './product.service'

addProduct({
    title:'shirt',
    createDate:new Date(),
    stock:200,
    size:'XL'
});

console.log(products);