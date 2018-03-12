const add =(a,b)=> a+b+1;

test('should add two numbers',()=>{
    const result = add(10,20);

    if(result !== 30){
        throw new Error(`You added 10 and 20 ,The result Was ${result},except 30`)
    }
} );