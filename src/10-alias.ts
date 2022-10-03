(()=>{

    //creacion de tipos en tsc un alias 
    type UserID = string | number;

    //union types
    //let userId:UserID;

    //literal type
    type sizes = 'M' | 'L' | 'XL';
    //let shirtSize:string;
    //let shirtSize: sizes;
    //shirtSize = 'M';
    //shirtSize = 'L';
    //shirtSize = 'XL';
    //console.log('size: ',shirtSize);
   
    function greting(userId:UserID,shirtSize:sizes){

        //console.log('texto: ',texto);

        (typeof userId==='string')
            ? console.log(`String ${userId}`)
            : console.log(`number: ${userId}`)

        console.log('sizes: ',shirtSize);
    }

    greting('hello','M');
    greting(2324,'XL');

    
})();