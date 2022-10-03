( ()=>{

    let isEnable = true;
    isEnable = false;

    console.log(isEnable);

    //tipado de forma explicita
    let isnewEnable: boolean = false;
    isnewEnable = true;

    console.log(isnewEnable);

    const ramdom = Math.random();
    console.log(ramdom);    
    
    isEnable = ramdom > 5 ? true:false;
    console.log(isEnable);  
})();