/**
//  about hoisting and scope block and scope chain
 */
function patriChai( age, earning){
    var decition = canMarry(100);
    // console.log(decition);
    // console.log(trueAge); // when hoisting op gets 'err'
    console.log(age);
    console.log(earning);
    const trueAge = age + 7;
    function canMarry(expense){ // full/normal function dile access hobe hoisting 
    // const canMarry = function(expense){ // expresstion function will be 'err'
        const remaining = earning - expense;
        console.log(showing);
        if(remaining > 50){
            var showing = 500;
            return true;
        }
        return false;
    }
}
patriChai(22, 2000); 