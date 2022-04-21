function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    return function returnsANamedFunction() { };
    
}
function returnsAnAnonymousFunction (){
    return () =>console.log("returns an anonymous function")
}
//console.log("returns a named function");