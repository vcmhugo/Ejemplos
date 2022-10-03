
 export type productsType = {

    title:string,
    createDate:Date,
    stock:number,
    size?:sizes
}


export type sizes = 'M' | 'L' | 'XL';