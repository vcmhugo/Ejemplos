(()=>{

    let myNumber:number;
    let myString:string;

    let myNull:null = null;
    let myUndefined:undefined = undefined;

    console.log(`null: ${myNull} undefined: ${myUndefined}`);

    //typado de tipe null 
    let myNumbers:number | null=null;
    myNumbers = 12;
    console.log(myNumbers);

})();