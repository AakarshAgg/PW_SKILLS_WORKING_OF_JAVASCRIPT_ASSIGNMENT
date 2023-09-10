{   let a
    try{
        console.log("Before",a)
    }catch(error){
        console.log(error)
    }
    a = 1
    console.log("After",a)
    var b
    try{
        console.log("Before",b)
    }catch(err){
        console.log(err)
    }
    b = 2;
    console.log("After",b)

    try{
        console.log("Before",c)
    }catch(err){
        console.log(err)
    }
   const  c = 3;
    console.log("After",c)
}






