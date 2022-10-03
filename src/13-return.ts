(()=>{

        const calTotal = (

            prices:number[]

        ):number =>{

            let total = 0;

            prices.forEach((item)=>{
                total +=item;
            })

            return total;
            //console.log(total);
        }

        //const rta = calTotal([1,2,3,4,5,6,7,9,10]);

        const printTotal = (
            prices:number[]
        ):void =>{

            const rta = calTotal(prices);
            console.log(`el total es ${rta}`);

        }


        printTotal([1,2,3,4,5,6,7,9,10]);

})();