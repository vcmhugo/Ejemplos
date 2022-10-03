import {productsType} from './product.model';

export const products: productsType[] = [];
export const addProduct = (
    data:productsType
) =>{
    
    products.push(data);
}