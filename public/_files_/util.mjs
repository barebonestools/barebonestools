 export default{
 advRand(min,max,repeats){
        //min is inclusive!!
        //all are type: number
        let numbers = []
        if( min > max ){
            let temp = min
            min = max
            max = temp
        }
        for (let index = 0; index < repeats; index++) {
            const range = (max+1)-min
            const onepart = 1/range
            const randomnumber = Math.random()
            let multiplier = 1
            while(onepart*multiplier<randomnumber){
                multiplier++
            }
            numbers.push(multiplier+(min-1))
        }
        return numbers
    },
    simplrand(max){
        //max is inclusive!
        let verimax = Math.trunc(Math.abs(max));
        return Math.trunc( (verimax+1)*(Math.random()) )
    },
    betterand(min,max){
        //min & max are inclusive!!
        console.log(this.simplrand(max-min)+min)
        return this.simplrand(max-min)+min
    }
}