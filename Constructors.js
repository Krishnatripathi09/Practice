//Constructors in JS 

class car {
    constructor(color, model, year) {
        this.color = color;
        this.model=model;
        this.year=year;
}
}
const val =new car("Raven Black","Ford-Mustang-GT-429-Boss","1969")
console.log(val.color);

/*  A constructor is a special method in Js which is used to initialize objects when they ar created from 
a class, it is used to pass values to objects that will act as it properties */