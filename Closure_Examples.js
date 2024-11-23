function z(){
    var b=900;
    function x(){
        var a=7
        function y(){
            console.log(a,b);
        }
        y()
    }
    x()
}
z();

//So in above example function y forms the closure within the scope of x and 
//scope of z