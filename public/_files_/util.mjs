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
    },
    clamp(value, min, max) {
        if (typeof value !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
            throw new TypeError('clamp expects numeric values.');
        }
        if (!Number.isFinite(value) || !Number.isFinite(min) || !Number.isFinite(max)) {
            throw new TypeError('clamp expects finite numbers.');
        }
        if (min > max) {
            throw new RangeError('clamp requires min to be less than or equal to max.');
        }
        return Math.min(Math.max(value, min), max);
    }
}